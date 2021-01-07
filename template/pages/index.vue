<template>
	<div>
		<hello-world />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

import HelloWorld from '~/components/HelloWorld.vue';

@Component({
	name: 'IndexPage',
	components: { HelloWorld },
})
export default class IndexPage extends Vue {

}
</script>
