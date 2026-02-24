<template>
  <div
    class="member-carousel"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @wheel.prevent="onWheel"
  >
    <div
      ref="trackRef"
      class="member-track"
      :class="{ paused: isPaused }"
      :style="{ '--scroll-width': `${scrollWidth}px`, '--offset': `${manualOffset}px` }"
    >
      <div
        v-for="(member, index) in displayMembers"
        :key="`member-${index}`"
        class="member-card"
        @click="onMemberClick(member)"
      >
        <div class="avatar-wrapper">
          <img
            :src="member.avatar"
            :alt="member.name"
            class="avatar-img"
            @error="handleImageError"
          />
          <div class="avatar-overlay">
            <span class="view-text">查看</span>
          </div>
        </div>
        <h3 class="member-name" :class="{ 'dark-mode': isDark }">{{ member.name }}</h3>
        <p class="member-role">{{ member.role }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, computed, onUnmounted } from 'vue';
import { members, type Member } from '../data/members';

const trackRef = ref<HTMLElement | null>(null);
const isPaused = ref(false);
const scrollWidth = ref(0);
const manualOffset = ref(0);
const isDark = ref(false);

// 复制足够多的成员列表，确保填满屏幕 + 有滚动空间
const displayMembers = computed(() => {
  // 至少重复4份，保证无论屏幕多宽都能无限循环
  return [...members, ...members, ...members, ...members];
});

function checkDarkMode() {
  isDark.value = document.documentElement.classList.contains('dark');
}

let darkModeObserver: MutationObserver | null = null;

function onMouseEnter() {
  isPaused.value = true;
}

function onMouseLeave() {
  isPaused.value = false;
  manualOffset.value = 0;
}

function onWheel(e: WheelEvent) {
  if (isPaused.value) {
    manualOffset.value += e.deltaY * 0.5;
  }
}

function onMemberClick(member: Member) {
  // 预留二级页面接口：未来可跳转到成员详情页
  console.log('Member clicked:', member.name, '- 二级页面接口预留');
}

function handleImageError(e: Event) {
  const target = e.target as HTMLImageElement;
  target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(target.alt)}`;
}

onMounted(async () => {
  await nextTick();
  if (trackRef.value) {
    // 动画滚动的距离 = 前半部分的宽度（即2份成员的宽度）
    scrollWidth.value = trackRef.value.scrollWidth / 2;
  }

  // 监听 dark mode 变化
  checkDarkMode();
  darkModeObserver = new MutationObserver(() => {
    checkDarkMode();
  });
  darkModeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });
});

onUnmounted(() => {
  if (darkModeObserver) {
    darkModeObserver.disconnect();
  }
});
</script>

<style scoped>
.member-carousel {
  overflow: hidden;
  cursor: default;
  padding: 1rem 0;
  -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
  mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
}

.member-track {
  display: flex;
  gap: 2rem;
  width: max-content;
  animation: marquee 40s linear infinite;
  transform: translateX(calc(var(--offset, 0px)));
}

.member-track.paused {
  animation-play-state: paused;
}

@keyframes marquee {
  0% {
    transform: translateX(var(--offset, 0px));
  }
  100% {
    transform: translateX(calc(-1 * var(--scroll-width, 0px) + var(--offset, 0px)));
  }
}

.member-card {
  flex-shrink: 0;
  width: 140px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.member-card:hover {
  transform: scale(1.05);
}

.avatar-wrapper {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto 0.75rem;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid transparent;
  background-color: #e5e7eb;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.member-card:hover .avatar-wrapper {
  border-color: var(--primary-color);
  box-shadow: 0 0 20px rgba(var(--primary-color-rgb), 0.3);
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.member-card:hover .avatar-img {
  transform: scale(1.1);
}

.avatar-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(var(--primary-color-rgb), 0);
  transition: background 0.3s ease;
}

.member-card:hover .avatar-overlay {
  background: rgba(var(--primary-color-rgb), 0.4);
}

.view-text {
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  opacity: 0;
  transform: translateY(5px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.member-card:hover .view-text {
  opacity: 1;
  transform: translateY(0);
}

/* 成员名称：light 模式黑色，dark 模式白色 */
.member-name {
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #111827;
  transition: color 0.3s ease;
}

.member-name.dark-mode {
  color: #ffffff;
}

/* 成员职务：始终暗色 */
.member-role {
  font-size: 0.75rem;
  color: #6b7280;
  transition: color 0.3s ease;
}
</style>
