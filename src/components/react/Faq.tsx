import { Accordion, AccordionTab } from 'primereact/accordion';
export default function AccordionX() {
  return <>
    <div>
      <Accordion multiple>
        <AccordionTab header="Do you provide strategy ideas or recommendations?">
          <p>
            No. We do not provide financial advice, tips, or recommendations. You bring the logic — we build, backtest, and deploy it. Your strategy remains confidential and is never reused.
          </p>
        </AccordionTab>
        <AccordionTab header="Is my strategy safe with you? Will you or others be able to see or reuse it?">
          <p>
            Absolutely safe. All strategies are end-to-end encrypted, both at rest and in execution. Only the assigned engineer and your private container handle your code — and even then, access is locked behind strict controls. We sign NDAs on request.
          </p>
        </AccordionTab>

        <AccordionTab header="What kind of strategies can you build and deploy?">
          <p>
            We support most F&O strategies — directional, spreads, straddles/strangles, scalping, intraday momentum, and more. You can share your idea in plain English or pseudocode, and we’ll help convert it to Python + deploy it to your broker.
          </p>
        </AccordionTab>

        <AccordionTab header="What brokers do you support? Can I use multiple accounts?">
          <p>
            We currently support Zerodha, Upstox, XTS and more via broker APIs. HNI plans include support for multiple trading accounts — perfect for managing personal and client capital in parallel.
          </p>
        </AccordionTab>
      </Accordion>
    </div>
  </>
}
