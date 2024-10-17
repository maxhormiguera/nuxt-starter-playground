export const useSampleStore = defineStore('sampleStore', () => {
  const posts = ref([])

  async function getPosts () {
    posts.value = await $fetch('https://jsonplaceholder.typicode.com/posts/31')

  }

  return { posts, getPosts }
})