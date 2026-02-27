<template>
  <div
    class="fixed top-2 right-4 z-50 flex items-center w-16 h-8 rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer transition-colors duration-300 shadow-lg"
    @click="toggleTheme"
    aria-label="切换主题"
  >
    <!-- 背景图标 -->
    <div class="absolute inset-0 flex items-center justify-between px-2">
      <Moon class="w-4 h-4 " />
      <Sun class="w-4 h-4 text-yellow-500" />
    </div>
    <!-- 滑动开关 -->
    <div
      class="absolute w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300"
      :class="isDark ? 'translate-x-9' : 'translate-x-1'"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Sun, Moon } from 'lucide-vue-next';

const isDark = ref(true);

function syncTheme() {
  isDark.value = document.documentElement.classList.contains('dark');
}

function toggleTheme() {
  (window as any).toggleDarkMode();
  syncTheme();
}

let observer: MutationObserver | null = null;

onMounted(() => {
  syncTheme();
  observer = new MutationObserver(syncTheme);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });
});

onUnmounted(() => observer?.disconnect());
</script>
