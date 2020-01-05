import { css } from 'styled-components';

const sizes = {
	tablet:640,
	desktop:1024,
	xldesktop:1200,
	xxldesktop:1440
};

// Iterate through the sizes and create a media template
const mediaQueries =
	Object.keys(sizes)
		.reduce((acc, label) => {
			acc[label] = (...args) => css`
				@media ${label === 'desktop' ? 'print, screen and' : ''} print, screen and (min-width: ${sizes[label] / 16}em) {
					${css(...args)}
				}
			`;
			return acc
		}, {});

console.log(mediaQueries)

export default mediaQueries;