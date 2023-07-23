import type { LayoutServerLoad } from './$types';
import Stripe from 'stripe';
import { STRIPE_TOKEN } from '$env/static/private';

export const load: LayoutServerLoad = async (event) => {
	const page_session = await event.locals.getSession();
	let checkout_session = null;
	if (page_session) {
		const stripe = new Stripe(STRIPE_TOKEN, {
			apiVersion: '2022-11-15'
		});

		checkout_session = await stripe.checkout.sessions.create({
			mode: 'subscription',
			payment_method_types: ['card'],
			line_items: [
				{
					price: 'price_1KYE0EKpOiJyve6nT9Qo9IfN',
					quantity: 1
				}
			],
			success_url: `https://www.prizebot.dev/`,
			cancel_url: `https://www.prizebot.dev/`,
			subscription_data: {
				metadata: {
					discord_id: page_session.user.id
				}
			}
		});
	}
	return {
		session: page_session,
		checkout_url: checkout_session ? checkout_session.url : null
	};
};
