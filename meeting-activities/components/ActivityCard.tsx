'use client';

import { Activity, durationLabels } from '@/data/activities';
import {
  Gamepad2,
  Sparkles,
  Phone,
  MapPin,
  Lightbulb,
  Puzzle,
  Trophy,
  Smile,
  Type,
  Pencil,
  ExternalLink,
  Clock,
  Zap,
  Users,
} from 'lucide-react';
import { clsx } from 'clsx';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'gamepad-2': Gamepad2,
  sparkles: Sparkles,
  phone: Phone,
  'map-pin': MapPin,
  lightbulb: Lightbulb,
  puzzle: Puzzle,
  trophy: Trophy,
  smile: Smile,
  type: Type,
  pencil: Pencil,
};

const durationColors: Record<number, { bg: string; text: string; border: string; iconBg: string }> = {
  30: {
    bg: 'bg-coral-50',
    text: 'text-coral-600',
    border: 'border-coral-200',
    iconBg: 'bg-gradient-to-br from-coral-400 to-coral-500',
  },
  20: {
    bg: 'bg-ocean-50',
    text: 'text-ocean-600',
    border: 'border-ocean-200',
    iconBg: 'bg-gradient-to-br from-ocean-400 to-ocean-500',
  },
  10: {
    bg: 'bg-sage-50',
    text: 'text-sage-600',
    border: 'border-sage-200',
    iconBg: 'bg-gradient-to-br from-sage-400 to-sage-500',
  },
};

interface ActivityCardProps {
  activity: Activity;
  index: number;
}

export function ActivityCard({ activity, index }: ActivityCardProps) {
  const IconComponent = iconMap[activity.icon] || Sparkles;
  const colors = durationColors[activity.duration];

  return (
    <article
      className={clsx(
        'group relative bg-white rounded-2xl border border-gray-100',
        'shadow-sm hover:shadow-lg hover:shadow-gray-200/50',
        'transition-all duration-300 ease-out',
        'hover:-translate-y-1',
        'animate-slide-up'
      )}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Card Content */}
      <div className="p-6">
        {/* Header Row */}
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div
            className={clsx(
              'flex-shrink-0 w-12 h-12 rounded-xl',
              'flex items-center justify-center',
              'shadow-lg shadow-gray-200/50',
              'group-hover:scale-110 transition-transform duration-300',
              colors.iconBg
            )}
          >
            <IconComponent className="w-6 h-6 text-white" />
          </div>

          {/* Title & Time Tag */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="font-display font-semibold text-lg text-gray-900 truncate">
                {activity.title}
              </h3>
              <span
                className={clsx(
                  'inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium',
                  colors.bg,
                  colors.text
                )}
              >
                <Clock className="w-3 h-3" />
                {durationLabels[activity.duration]}
              </span>
            </div>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              {activity.description}
            </p>
          </div>
        </div>

        {/* Details Section */}
        <div className="mt-5 pt-5 border-t border-gray-100 space-y-3">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-md bg-emerald-50 flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-emerald-500" />
            </div>
            <div>
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                How it works
              </span>
              <p className="text-sm text-gray-600 mt-0.5">{activity.howItWorks}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-md bg-violet-50 flex items-center justify-center">
              <Users className="w-3.5 h-3.5 text-violet-500" />
            </div>
            <div>
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                How to moderate
              </span>
              <p className="text-sm text-gray-600 mt-0.5">{activity.howToModerate}</p>
            </div>
          </div>
        </div>

        {/* Link Button */}
        <div className="mt-5">
          <a
            href={activity.link}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              'inline-flex items-center justify-center gap-2 w-full',
              'px-4 py-3 rounded-xl',
              'bg-gray-900 text-white text-sm font-medium',
              'hover:bg-gray-800 active:bg-gray-950',
              'transition-colors duration-200',
              'group/btn'
            )}
          >
            Open Activity
            <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
          </a>
        </div>
      </div>

      {/* Subtle gradient accent on hover */}
      <div
        className={clsx(
          'absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100',
          'transition-opacity duration-300 pointer-events-none',
          'bg-gradient-to-br from-transparent via-transparent to-gray-50'
        )}
      />
    </article>
  );
}

