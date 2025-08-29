## Centering

I have header, inside is .container.
To center the container vertically,

You want the .container to keep its full width inside .header. Two ways:

### Option 1: Let .header handle centering directly

```css
.header {
  display: flex;
  align-items: center;
  justify-content: center; /* centers .container horizontally */
}

.container {
  flex: 1; /* allow it to grow */
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 3.2rem;
  display: flex; /* flex here instead of .flex-header */
  justify-content: space-between;
  align-items: center;
}
```

Now .container fills the width up to 120rem and centers vertically without collapsing.

### Option 2: Don’t flex .header at all

Instead, make the .flex-header the flex container (it already is!) and just ensure it’s vertically centered with height: 100%:

```css
.header {
  height: 4.8rem;
  background-color: rgb(182, 201, 201);
}

.flex-header {
  display: flex;
  justify-content: space-between;
  align-items: center; /* vertical centering */
  height: 100%; /* take full header height */
}
```

This way .header stays a simple block, .container.flex-header handles both max-width and flex alignment, and nothing collapses.

## Icon Pack

devicons or Simpleicons
