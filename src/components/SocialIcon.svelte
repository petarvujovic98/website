<script lang="ts">
  export let data: { link: string; name: string };
</script>

<a href={data.link} class="w-7 flex items-center justify-center">
  <div class="aspect-square w-full" title={data.name}>
    <slot name="icon" />
  </div>
</a>
