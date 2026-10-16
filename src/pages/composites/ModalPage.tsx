import { useState } from 'react'
import { Modal, type ModalSize } from '@/components/composites'
import { Button } from '@/components/primitives'
import { PageHeader, Section } from '@/components/showcase'

export function ModalPage() {
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [activeSize, setActiveSize] = useState<ModalSize | null>(null)

  const sizeList: ModalSize[] = ['sm', 'md', 'lg', 'xl']

  return (
    <>
      <PageHeader
        title="Modal"
        description="Accessible dialog using React Portal. Implements focus trap, Escape to close, body scroll lock and focus restore."
        tags={['composite', 'accessible', 'focus-trap', 'portal']}
      />

      <div className="flex flex-col gap-6">
        <Section title="Basic Modal">
          <Button onClick={() => setOpen1(true)}>Open Modal</Button>
          <Modal open={open1} onClose={() => setOpen1(false)} title="Design System Modal">
            <div className="flex flex-col gap-3">
              <p className="text-foreground">This modal implements all WCAG accessibility patterns:</p>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                <li>Focus is trapped inside the dialog</li>
                <li>Escape key closes the modal</li>
                <li>Focus returns to the trigger button on close</li>
                <li>Background body scroll is locked</li>
                <li>Uses aria-modal and aria-labelledby</li>
              </ul>
            </div>
          </Modal>
        </Section>

        <Section title="With Footer">
          <Button onClick={() => setOpen2(true)} variant="danger">Delete Component</Button>
          <Modal
            open={open2}
            onClose={() => setOpen2(false)}
            title="Confirm Delete"
            footer={
              <>
                <Button variant="ghost" onClick={() => setOpen2(false)}>Cancel</Button>
                <Button variant="danger" onClick={() => setOpen2(false)}>Delete</Button>
              </>
            }
          >
            <p className="text-foreground">Are you sure you want to delete this component? This action cannot be undone.</p>
          </Modal>
        </Section>

        <Section title="Sizes">
          <div className="flex gap-3 flex-wrap">
            {sizeList.map(size => (
              <span key={size}>
                <Button size="sm" variant="outline" onClick={() => setActiveSize(size)}>
                  {size.toUpperCase()}
                </Button>
                <Modal
                  open={activeSize === size}
                  onClose={() => setActiveSize(null)}
                  title={`${size.toUpperCase()} Modal`}
                  size={size}
                >
                  <p className="text-foreground">A <strong>{size}</strong>-sized modal dialog.</p>
                </Modal>
              </span>
            ))}
          </div>
        </Section>
      </div>
    </>
  )
}
