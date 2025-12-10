'use client';

import { useState, useMemo } from 'react';
import { activities, FilterValue, durations, durationLabels } from '@/data/activities';
import { ActivityCard } from '@/components/ActivityCard';
import { TimeFilter } from '@/components/TimeFilter';
import { Sparkles, Clock } from 'lucide-react';
import { clsx } from 'clsx';

export default function Home() {
  const [filter, setFilter] = useState<FilterValue>('all');

  const filteredActivities = useMemo(() => {
    if (filter === 'all') return activities;
    return activities.filter((a) => a.duration === parseInt(filter));
  }, [filter]);

  const groupedActivities = useMemo(() => {
    if (filter !== 'all') return null;
    return durations.map((duration) => ({
      duration,
      label: durationLabels[duration],
      activities: activities.filter((a) => a.duration === duration),
    }));
  }, [filter]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-coral-100/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-ocean-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sage-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="pt-16 pb-12 px-6">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-coral-50 to-ocean-50 border border-coral-100 mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-coral-500" />
              <span className="text-sm font-medium text-gray-700">
                Team bonding made easy
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 animate-slide-up">
              Meeting Activities
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '100ms' }}>
              Curated collection of fun activities to energize your team meetings.
              <br className="hidden md:block" />
              Filter by time and find the perfect ice-breaker.
            </p>

            {/* Filter */}
            <div className="mt-10 flex justify-center animate-slide-up" style={{ animationDelay: '200ms' }}>
              <TimeFilter value={filter} onChange={setFilter} />
            </div>
          </div>
        </header>

        {/* Content */}
        <section className="px-6 pb-24">
          <div className="max-w-5xl mx-auto">
            {/* Grouped view (when filter is 'all') */}
            {groupedActivities && (
              <div className="space-y-16">
                {groupedActivities.map((group) => (
                  <div key={group.duration}>
                    {/* Section Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className={clsx(
                        'flex items-center gap-2 px-4 py-2 rounded-xl',
                        group.duration === 30 && 'bg-coral-100 text-coral-700',
                        group.duration === 20 && 'bg-ocean-100 text-ocean-700',
                        group.duration === 10 && 'bg-sage-100 text-sage-700',
                      )}>
                        <Clock className="w-4 h-4" />
                        <span className="font-semibold">{group.label}</span>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent" />
                      <span className="text-sm text-gray-400">
                        {group.activities.length} {group.activities.length === 1 ? 'activity' : 'activities'}
                      </span>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {group.activities.map((activity, index) => (
                        <ActivityCard
                          key={activity.id}
                          activity={activity}
                          index={index}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Filtered view (when specific duration selected) */}
            {!groupedActivities && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-sm text-gray-500">
                    Showing {filteredActivities.length} {filteredActivities.length === 1 ? 'activity' : 'activities'}
                  </span>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredActivities.map((activity, index) => (
                    <ActivityCard
                      key={activity.id}
                      activity={activity}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-100 py-8 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-sm text-gray-400">
              Made for fun team meetings ✨
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}

