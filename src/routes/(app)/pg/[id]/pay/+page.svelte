<script lang="ts">
  import { dev } from "$app/environment";
  import { events } from "$lib/data/events";
  import type { db_registration } from "$lib/types";
  import { onMount } from "svelte";
  // import { cashfreeSandbox } from "cashfree-dropjs";
  // import { cashfreeProd } from "cashfree-dropjs";
  import { goto } from "$app/navigation";
  export let data: { db: db_registration; pg: any };
  let _data = events.find((event) => event.id === data.db.event);
  // onMount(() => {
  //   let cashfree;
  //   // TODO: change to prod
  //   cashfree = new cashfreeSandbox.Cashfree();

  //   cashfree.initialiseDropin(document.getElementById("payment-form"), {
  //     orderToken: data.pg.order_token,
  //     onSuccess: (e) => {
  //       /* {"order":{"status":"PAID","orderId":"1_1666199073","message":"Order is Paid","errorText":null,"activePaymentMethod":"upi-collect"},"transaction":{"txStatus":"SUCCESS","txMsg":"Simulated response message","transactionId":885691095,"transactionAmount":104}} */
  //       //console.log(e);
  //       goto(`/pg/process_return?cf_id=${e.order.orderId}&cf_token=${data.pg.order_token}`);
  //     },
  //     onFailure: (e) => {
  //       /* 
  //       {"order":{"status":"ERROR","errorText":"Please provide a valid UPI ID","activePaymentMethod":"upi-collect","message":"order has failed","orderId":"1_1666199073"},"transaction":null}
  //       */
  //       //console.log(e);
  //       alert(e.order.errorText);
  //     },
  //     components: [
  //       "order-details",
  //       "card",
  //       "netbanking",
  //       "app",
  //       "upi",
  //     ],
  //   });
  // });
</script>

<div
  class="container max-w-4xl flex flex-col items-stretch justify-center bg-base-200 mt-16 rounded-xl p-8 bg-base-200"
>
  <div class="title text-center">
    <span class="text-4xl vimh">Registration Form</span>
  </div>
  <div
    class="event-details flex flex-col-reverse md:flex-row items-center justify-between border-b border-base-content mx-8 p-4"
  >
    <div class="text-content flex flex-col">
      <div class="data-pair text-sm">
        <span class="text-lg text-bold mr-2">Event Name: </span>{_data?.name}
      </div>
      <div class="data-pair text-sm">
        <span class="text-lg text-bold mr-2">Event Details:</span>{_data?.desc}
      </div>
      <div class="data-pair text-sm">
        <span class="text-lg text-bold mr-2">Event Fees:</span><iconify-icon
          icon="carbon:currency-rupee"
        />{data.db.amount / 100}
      </div>
    </div>
    <div class="event-icon">
      <iconify-icon icon={_data?.icon} class="text-6xl text-primary" />
    </div>
  </div>
  <div
    id="payment-form"
    class="form-container form-control items-center justify-evenly min-h-[20rem] rounded-lg"
  />
</div>

<style>
  .bg-content {
    /* background: linear-gradient(to top, rgb(29, 78, 216), rgb(30, 64, 175), rgb(17, 24, 39)); */
    @apply bg-transparent;
  }
</style>

<!-- {{
  session: null,
  db: {
    id: 1,
    created_at: "2022-10-17T09:02:18.946+00:00",
    name: "Rogue Catalyst",
    email: "parapallidev@gmail.com",
    education: "GCOEN",
    event: "events-4",
    amount: 10400,
    status: false,
    team: ["", "", "", ""],
    rzp_pid: null,
    rzp_oid: null,
    rzp_sig: null,
  },
  pg: {
    id: "order_KUnWt9OvUXuAMF",
    entity: "order",
    amount: 10400,
    amount_paid: 0,
    amount_due: 10400,
    currency: "INR",
    receipt: null,
    offer_id: null,
    status: "created",
    attempts: 0,
    notes: [],
    created_at: 1666000761,
  },
}} -->
