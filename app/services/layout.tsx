import type { ReactNode } from "react"

export default function ServicesLayout({
	children,
}: {
	children: ReactNode
}) {
	return <div className="space-y-16 pb-16">{children}</div>
}
