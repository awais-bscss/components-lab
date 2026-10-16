import { useState } from 'react'
import { Skeleton, Button, Avatar, Heading, Text, Badge } from '@/components/primitives'
import { Card } from '@/components/composites'
import { PageHeader, Section } from '@/components/showcase'

export function SkeletonPage() {
  const [isLoading, setIsLoading] = useState(true)

  const handleReload = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <>
      <PageHeader
        title="Skeleton"
        description="Placeholder loading preview that mirrors content geometry to reduce perceived latency and layout shift."
        tags={['primitive', 'accessible', 'animation']}
      />

      <div className="flex flex-col gap-6">
        <Section title="Shapes & Variants">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border border-border rounded-xl space-y-3">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Text Variant</span>
              <div className="space-y-2 pt-2">
                <Skeleton variant="text" className="h-4 w-full" />
                <Skeleton variant="text" className="h-4 w-4/5" />
                <Skeleton variant="text" className="h-4 w-3/5" />
              </div>
            </div>

            <div className="p-4 border border-border rounded-xl space-y-3">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Circular Variant</span>
              <div className="flex items-center gap-4 pt-2">
                <Skeleton variant="circular" width={32} height={32} />
                <Skeleton variant="circular" width={44} height={44} />
                <Skeleton variant="circular" width={56} height={56} />
              </div>
            </div>

            <div className="p-4 border border-border rounded-xl space-y-3">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Rectangular Variant</span>
              <div className="pt-2">
                <Skeleton variant="rectangular" height={80} className="w-full" />
              </div>
            </div>
          </div>
        </Section>

        <Section title="Animation Styles">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border border-border rounded-xl space-y-2">
              <span className="text-xs font-semibold text-muted-foreground">Pulse (Default)</span>
              <Skeleton variant="rectangular" height={90} animation="pulse" className="w-full" />
            </div>

            <div className="p-4 border border-border rounded-xl space-y-2">
              <span className="text-xs font-semibold text-muted-foreground">Wave (Shimmer Sweep)</span>
              <Skeleton variant="rectangular" height={90} animation="wave" className="w-full" />
            </div>

            <div className="p-4 border border-border rounded-xl space-y-2">
              <span className="text-xs font-semibold text-muted-foreground">None (Static)</span>
              <Skeleton variant="rectangular" height={90} animation="none" className="w-full" />
            </div>
          </div>
        </Section>

        <Section title="Interactive Simulation: Skeleton vs Loaded Content">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <Text variant="small" color="muted">
                Toggle to preview how UI gracefully transitions from placeholder to real data.
              </Text>
              <Button size="sm" variant={isLoading ? 'secondary' : 'primary'} onClick={handleReload}>
                {isLoading ? 'Simulating Load (2s)...' : 'Re-trigger Skeleton'}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              {/* Profile Card Mockup */}
              <div className="p-5 border border-border rounded-xl bg-surface space-y-4 shadow-xs">
                {isLoading ? (
                  <>
                    <div className="flex items-center gap-3">
                      <Skeleton variant="circular" width={48} height={48} animation="wave" />
                      <div className="flex-1 space-y-2">
                        <Skeleton variant="text" className="w-2/3 h-4" animation="wave" />
                        <Skeleton variant="text" className="w-1/3 h-3" animation="wave" />
                      </div>
                    </div>
                    <div className="space-y-2 pt-2">
                      <Skeleton variant="text" className="w-full h-3" animation="wave" />
                      <Skeleton variant="text" className="w-4/5 h-3" animation="wave" />
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Skeleton variant="rectangular" width={70} height={28} className="rounded-md" animation="wave" />
                      <Skeleton variant="rectangular" width={70} height={28} className="rounded-md" animation="wave" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-3">
                      <Avatar name="Sarah Jenkins" size="md" status="online" />
                      <div>
                        <Heading level="h4" className="text-sm font-semibold">Sarah Jenkins</Heading>
                        <Text variant="small" color="muted">Senior UI/UX Engineer</Text>
                      </div>
                    </div>
                    <Text variant="body" className="text-sm pt-2">
                      Working on the next-generation design systems and accessible primitive components with Tailwind CSS.
                    </Text>
                    <div className="flex gap-2 pt-2">
                      <Badge variant="primary" size="sm">Design</Badge>
                      <Badge variant="default" size="sm">React 19</Badge>
                    </div>
                  </>
                )}
              </div>

              {/* Feed Card Mockup */}
              <Card padding="none" className="overflow-hidden shadow-xs">
                {isLoading ? (
                  <div className="p-5 space-y-4">
                    <Skeleton variant="rectangular" height={130} animation="wave" className="w-full rounded-lg" />
                    <div className="space-y-2">
                      <Skeleton variant="text" className="w-3/4 h-4" animation="wave" />
                      <Skeleton variant="text" className="w-full h-3" animation="wave" />
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="h-32 bg-linear-to-r from-primary/80 to-primary flex items-center justify-center text-primary-foreground font-medium">
                      Featured Analytics Release
                    </div>
                    <div className="p-5 space-y-2">
                      <Heading level="h4" className="text-sm font-semibold">Performance Metrics Dashboard</Heading>
                      <Text variant="small" color="muted">
                        Real-time tracking of component latency, frame rates, and render performance.
                      </Text>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </Section>
      </div>
    </>
  )
}
