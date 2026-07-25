<script setup lang="ts">
import { useEditorStore } from '@/stores/editor'

defineProps<{
  open: boolean
}>()
const emit = defineEmits<{
  'update:open': [value: boolean]
}>()
const { t } = useI18n()
const editorStore = useEditorStore()

const iframeRef = ref<HTMLIFrameElement>()

function extractTitleSubtitle(): { title: string, subtitle: string } {
  const content = editorStore.getContent()
  let title = ''
  let subtitle = ''

  if (content) {
    const lines = content.split('\n')
    for (let i = 0; i < lines.length; i++) {
      const m = lines[i].match(/^#\s+(.+)/)
      if (m) {
        title = m[1].trim()
        for (let j = i + 1; j < lines.length; j++) {
          const next = lines[j].trim()
          if (next && !next.startsWith('#')) {
            subtitle = next.replace(/^>\s*/, '').trim()
            break
          }
        }
        break
      }
    }
  }

  return { title, subtitle }
}

function onIframeLoad() {
  const { title, subtitle } = extractTitleSubtitle()
  iframeRef.value?.contentWindow?.postMessage(
    { type: 'setContent', title, subtitle },
    '*',
  )
}

function onClose() {
  emit('update:open', false)
}
</script>

<template>
  <Dialog :open="open" @update:open="onClose">
    <DialogContent class="!max-w-[98vw] sm:!max-w-[98vw] w-[1400px] h-[90vh] p-0 gap-0">
      <DialogHeader class="sr-only">
        <DialogTitle>{{ t('cover.title') }}</DialogTitle>
        <DialogDescription>{{ t('cover.description') }}</DialogDescription>
      </DialogHeader>
      <iframe
        ref="iframeRef"
        src="/cover.html"
        class="w-full h-full border-none rounded-b-lg"
        :title="t('cover.title')"
        @load="onIframeLoad"
      />
    </DialogContent>
  </Dialog>
</template>
