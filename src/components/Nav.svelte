<script>
	export let segment;
</script>

<style>
	nav {
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: calc(var(--main-padding)*1.5) calc(var(--main-padding)*2) 0;
  }
  
  h1 {
    margin-bottom: 0;
  }

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: 100%;
		height: 2px;
		background-color: #333;
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		/* padding: 1em 0.5em; */
		display: block;
  }
  
  li:not(:last-child) {
    margin-right: 1em;
  }
</style>

<nav>
  <h1>Luciano Feijão</h1>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>
	</ul>
</nav>
