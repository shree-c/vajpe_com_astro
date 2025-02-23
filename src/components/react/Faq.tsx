import { Accordion, AccordionTab } from 'primereact/accordion';
export default function AccordionX() {
  return <>
    <div>
      <Accordion multiple>
        <AccordionTab header="What do we mean by templates?">
          <p>
            Most software development tasks have a common structure. Templates are blueprints our developers use to build software. They help us deliver projects faster and with fewer errors.
          </p>
        </AccordionTab>
        <AccordionTab header="Why employee turnover doesn't affect projects?">
          <p>
            We take care of our people. The implementation of architecture using templates created by our core team is easier on brain. This means our developers are less stressed and more productive.
          </p>
        </AccordionTab>

        <AccordionTab header="What does templates contain?">
          <p>
            Templates contain the basic structure of the software. They include the architecture, design, and implementation details. This helps our developers stay productive in combination with AI tools.
          </p>
        </AccordionTab>

        <AccordionTab header="How do we ensure quality?">
          <p>
            The templates also contain quality assurance guidelines. This ensures that the software is built to the highest standards. We also have a team of quality assurance engineers who review the software before it is delivered to you.
          </p>
        </AccordionTab>
      </Accordion>
    </div>
  </>
}
