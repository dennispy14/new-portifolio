import type { ReactNode } from 'react'

type SectionTabsProps = {
  tabs: Array<{ id: string; label: string }>
  activeTab: string
  onChange: (tabId: string) => void
  children: ReactNode
}

export function SectionTabs({ tabs, activeTab, onChange, children }: SectionTabsProps) {
  return (
    <div className="tabs-container">
      <div className="tab-list" role="tablist" aria-label="Seções de conteúdo">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            className={activeTab === tab.id ? 'tab-button active' : 'tab-button'}
            onClick={() => onChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-panel">{children}</div>
    </div>
  )
}
