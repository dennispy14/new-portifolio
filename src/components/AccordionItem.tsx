import type { ReactNode } from 'react'

type AccordionItemProps = {
  id: string
  title: string
  subtitle?: string
  isOpen: boolean
  onToggle: () => void
  children: ReactNode
}

export function AccordionItem({
  id,
  title,
  subtitle,
  isOpen,
  onToggle,
  children,
}: AccordionItemProps) {
  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <button
        type="button"
        className="accordion-trigger"
        aria-expanded={isOpen}
        aria-controls={`panel-${id}`}
        id={`trigger-${id}`}
        onClick={onToggle}
      >
        <span>
          <strong>{title}</strong>
          {subtitle ? <small>{subtitle}</small> : null}
        </span>
        <span className="accordion-icon" aria-hidden="true" />
      </button>

      <div
        id={`panel-${id}`}
        className="accordion-panel"
        role="region"
        aria-labelledby={`trigger-${id}`}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="accordion-panel-inner">{children}</div>
      </div>
    </div>
  )
}
