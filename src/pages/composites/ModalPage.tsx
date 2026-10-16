import { useState } from 'react'
import { Modal, type ModalSize } from '@/components/composites'
import { Avatar, Badge, Button, Chip, Input, Text } from '@/components/primitives'
import { PageHeader, Section } from '@/components/showcase'

export function ModalPage() {
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [openForm, setOpenForm] = useState(false)
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

        <Section title="Composite Combinations">
          <Button onClick={() => setOpenForm(true)}>Open Profile Settings Modal</Button>
          <Modal
            open={openForm}
            onClose={() => setOpenForm(false)}
            title="Member Settings"
            size="md"
            footer={
              <div className="flex justify-end gap-2 w-full">
                <Button variant="ghost" onClick={() => setOpenForm(false)}>Cancel</Button>
                <Button variant="primary" onClick={() => setOpenForm(false)}>Save changes</Button>
              </div>
            }
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-surface-muted rounded-lg border border-border">
                <Avatar name="Sarah Connor" status="online" size="lg" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-foreground">Sarah Connor</span>
                    <Badge variant="primary" size="sm">Team Lead</Badge>
                  </div>
                  <Text variant="small" color="muted">sarah.connor@example.com</Text>
                </div>
              </div>
              <Input label="Full Name" defaultValue="Sarah Connor" />
              <Input label="Role Title" defaultValue="Design Systems Engineer" />
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">Assigned Teams</label>
                <div className="flex gap-1.5 flex-wrap">
                  <Chip variant="primary" selected>Design</Chip>
                  <Chip variant="default" selected>Engineering</Chip>
                  <Chip variant="default">Product</Chip>
                </div>
              </div>
            </div>
          </Modal>
        </Section>
      </div>
    </>
  )
}
