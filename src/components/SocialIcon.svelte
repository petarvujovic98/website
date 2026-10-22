<script lang="ts">
  export let data: { link: string; name: string };
</script>

<a
  href={data.link}
  aria-label={data.name}
  title={data.name}
  class="w-7 flex items-center justify-center rounded hover:text-sky-700 dark:hover:text-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700 dark:focus-visible:outline-sky-300"
>
  <div class="aspect-square w-full">
    <slot name="icon" />
  </div>
</a>
