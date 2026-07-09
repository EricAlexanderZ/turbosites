# Square Payment Setup — TurboSites Pricing Buttons

Each pricing button charges the **one-time build fee now** (a Square checkout
link). The **$100/month** plan is started **at launch** as a Square Subscription.
Two simple pieces — the build fee is automated on the button, the monthly is a
quick one-click at launch. ~10 minutes to set up.

> Why two pieces: Square (unlike Stripe) can't bundle a one-time fee and a
> subscription into a single checkout. Since you wanted the monthly to start at
> launch anyway, this splits cleanly.

---

## Part A — Build-fee buttons (do now)

### 1. Create a free Square account
Go to https://squareup.com and sign up. Do this in **Sandbox / test** first if you
want to trial it, then repeat live.

### 2. Create one checkout link per plan
Square Dashboard → **Online** → **Checkout links** → **Create a checkout link**
→ choose **Accept a payment**. Make three:

| Plan         | Title (customer sees)      | Amount   |
|--------------|----------------------------|----------|
| Turbo Start  | Turbo Start Website Build  | $700.00  |
| Turbo Growth | Turbo Growth Website Build | $1,000.00|
| Turbo Pro    | Turbo Pro Website Build    | $1,500.00|

- Turn on **Collect customer contact info / shipping** so you capture their name,
  email, and phone.
- Create each link and **copy the URL** (looks like `https://square.link/u/xxxxx`).

### 3. Paste the 3 URLs into the site
Open `components/pricing-section.tsx` and fill in the top block:

```ts
const PAYMENT_LINKS: Record<string, string> = {
  "Turbo Start":  "https://square.link/u/your-start-link",
  "Turbo Growth": "https://square.link/u/your-growth-link",
  "Turbo Pro":    "https://square.link/u/your-pro-link",
};
```

Save. The buttons now open Square checkout. (Any plan left blank keeps falling
back to the contact form, so you can launch one at a time.)

---

## Part B — The $100/month plan (start at launch)

### 4. Create the subscription plan once
Square Dashboard → **Items & orders** → **Subscriptions** (or **Subscription
plans**) → **Create plan**:
- Name: `Website Maintenance & Support`
- Price: `$100.00`, billing **Monthly**
- Save.

### 5. Start it when the site goes live
When you launch a client's site, open that plan → **Add subscriber** → enter the
customer's email → Square emails them to confirm and add a card. First $100 bills
then, and monthly after. (You can also attach it to an invoice if you prefer.)

That's the whole flow: they pay the build fee on the button today, and you flip on
their $100/mo the day you launch.

---

## 6. Test before going live
Use Square **Sandbox** with test card `4111 1111 1111 1111`, any future expiry,
any CVV, any ZIP. Confirm the build-fee checkout charges the right amount, then
switch your links to the **live** ones.

### Notes
- No secret keys or code live in your app — Square hosts checkout, so card data
  never touches your site.
- Square fees are ~2.6% + $0.30 per online charge; nothing monthly to use links.
- To change a price later, edit it in Square; the button URL stays the same.
