<script lang="ts">
  export let data: { link: string; name: string };
</script>

<a
  href={data.link}
  aria-label={data.name}
  title={data.name}
  class="w-7 flex items-center justify-center rounded hover:text-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange"
>
  <div class="aspect-square w-full">
    <slot name="icon" />
  </div>
</a>
