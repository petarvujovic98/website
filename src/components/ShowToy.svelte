<script lang="ts">
  let outerContainer: HTMLDivElement;
  let container: HTMLDivElement;
  let center: HTMLDivElement;

  function calculateAngle(
    mouseX: number,
    mouseY: number,
    anchorX: number,
    anchorY: number
  ): number {
    const deltaX = anchorX - mouseX;
    const deltaY = anchorY - mouseY;
    const radians = Math.atan2(deltaY, deltaX);

    return (radians * 180) / Math.PI + 90;
  }

  const handleMouse = ({ clientX, clientY }: MouseEvent) => {
    const boundingRectangle = container.getBoundingClientRect();
    const normalizedX = boundingRectangle.left + boundingRectangle.width / 2;
    const normalizedY = boundingRectangle.top + boundingRectangle.height / 2;

    const angle = calculateAngle(clientX, clientY, normalizedX, normalizedY);

    center.style.transform = `rotate(${angle}deg)`;
  };

  const handleScroll = () => {
    const hue = window.scrollY % 360;

    outerContainer.style.filter = `hue-rotate(${hue}deg)`;
  };
</script>

<svelte:window on:mousemove={handleMouse} on:scroll={handleScroll} />

<div
  class="rounded-full border-8 border-blue-200 p-1 aspect-square w-20"
  bind:this={outerContainer}
>
  <div
    class="rounded-full relative border-2 border-black aspect-square"
    bind:this={container}
  >
    <div
      class="flex items-end justify-center w-full h-full p-1"
      bind:this={center}
    >
      <div class="rounded-full bg-black w-4 h-4" />
    </div>
  </div>
</div>
