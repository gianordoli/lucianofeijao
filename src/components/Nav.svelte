<script>
	export let segment;
</script>

<nav>
  <h1>Luciano Feijão</h1>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">Work</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">About</a></li>
	</ul>
</nav>

<style>
	nav {
		box-sizing: border-box;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 1;
		padding: calc(var(--layout-padding)*1.25) calc(var(--layout-padding)*1.25) 0;
	}

	h1 {
		text-transform: uppercase;
	}	

	ul {
		display: table;
	}

	li {
		margin-top: 1em;
		line-height: 1em;
	}

	a {
		text-decoration: none;
		display: block;
		vertical-align: text-bottom;
		position: relative;
		font-weight: bold;
		color: inherit;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: 100%;
		height: 2px;
		background-color: #333;
		display: block;
		bottom: -0.25em;
	}	

	@media screen and (min-width: 740px) {

		nav {
			padding: calc(var(--layout-padding)*2) calc(var(--layout-padding)*2.5) 0;
			display: flex;
			justify-content: space-between;
			align-items: baseline;
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
			margin-top: 0;
		}

		li:not(:last-child) {
			margin-right: 1em;
		}

		a {
			font-weight: normal;
		}
	}
</style>