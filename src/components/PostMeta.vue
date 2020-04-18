<template lang="pug">
  span.post-meta(v-html="postMeta")
</template>

<script>
	export default {
		name: "PostMeta",
		props: ['post'],
		computed: {
			postReadTime() {
        let readTime = null
			  if (this.post.timeToRead) {
          const time = `${this.post.timeToRead > 1 ? 'mins' : 'min'}`
          readTime = `${this.post.timeToRead} ${time} read`
        }
        return readTime
			},
			postTags() {
				let tags = []
				this.post.tags.forEach(tag => {
					let tagLink = `<a href="${this.$url(tag.path)}">${tag.title}</a>`
					tags.push(tagLink)
				})
				return tags ? tags.join(' &middot; ') : null
			},
			postMeta() {
			  let meta = this.post.date
        
        if (this.postTags) meta += ` &mdash; ${this.postTags}`
        if (this.postReadTime) meta += ` &mdash; ${this.postReadTime}`
				// return `${this.post.date} &mdash; ${this.postTags} &mdash; ${this.postReadTime}`
        return meta
			}
		}
	}
</script>

<style lang="scss">

</style>
