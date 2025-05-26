<template>
    <div class="flex items-start items-center py-2 pr-4">
      <div class="rounded-lg bg-blue-500 px-4 py-2 ml-4 text-white relative">
        <div class="avatar absolute top-1 -left-7">
          <van-icon
            class="iconfont"
            size="1.5rem"
            class-prefix="icon"
            name="Chatgpt"
            color="#666666"
          />
        </div>
        <p v-html="Text" :data-csp="true"></p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import DOMPurify from 'dompurify';

  interface Props {
    msg: string;
  }
  const props = defineProps<Props>();
  const Text = ref(processText(props.msg));
  function processText(text: string) {
    // 先进行基本的文本处理
    let processedText = text.replace(/\t/g, "&emsp;");
    processedText = processedText.replace(/\n/g, "<br>");
    processedText = processedText.replace(/#/g,"");
    processedText = processedText.replace(/\*/g,"");
    
    // 使用 DOMPurify 净化 HTML
    return DOMPurify.sanitize(processedText, {
        ALLOWED_TAGS: ['br', 'p', 'span', 'em', 'strong'],
        ALLOWED_ATTR: []
    });
  }
  </script>
  
  <style lang="less" scoped></style>