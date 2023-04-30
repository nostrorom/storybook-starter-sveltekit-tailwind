import type { Meta, StoryObj } from '@storybook/svelte';
import { within, userEvent } from '@storybook/testing-library';

import Page from './Page.svelte';

const meta = {
	title: 'Example/Page',
	component: Page,
	parameters: {
		layout: 'fullscreen'
	}
} satisfies Meta<Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};

export const LoggedIn: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const loginButton = await canvas.getByRole('button', {
			name: /Log in/i
		});
		await userEvent.click(loginButton);
	}
};
