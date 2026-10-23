// "So far": one block per company with its roles, all hanging from a hand-drawn line.
import classNames from 'classnames';
import type { Company, Role, Site } from '@/content/types';
import { InkLink } from '@/components/ui/InkLink';
import { markerBg } from '@/lib/markers';
import { SectionHead } from './Section';

const row = 'grid grid-cols-[var(--yc)_var(--lc)_minmax(0,1fr)]';

function RoleRow({ role }: { role: Role }) {
  return (
    <li className={classNames(row, 'items-start')}>
      <span
        className={classNames(
          'font-hand relative col-start-1 justify-self-start text-[1.6rem] leading-none font-bold tabular-nums',
          role.current &&
            'after:border-teal after:absolute after:inset-[-7px_-9px_-5px_-8px] after:-rotate-[4deg] after:rounded-[48%_52%_45%_55%/55%_45%_58%_42%] after:border-[2.5px]'
        )}
      >
        {role.year}
      </span>
      <span
        aria-hidden
        className={classNames(
          'pop-on-enter relative z-10 col-start-2 mt-1.5 size-3 justify-self-center rounded-full border-[2.5px]',
          role.current ? 'border-teal bg-teal' : 'border-ink bg-paper'
        )}
      />
      <div className="nudge-on-enter col-start-3 min-w-0 pl-3">
        <h4 className="text-[1.1rem] leading-snug font-bold">{role.title}</h4>
        {role.text && <p className="text-ink-soft mt-0.5 max-w-[56ch]">{role.text}</p>}
      </div>
    </li>
  );
}

function CompanyBlock({ company }: { company: Company }) {
  return (
    <li>
      <div className={classNames(row, 'items-center')}>
        <span
          aria-hidden
          className={classNames(
            'slap-on-enter border-ink relative z-10 col-start-2 size-[30px] -rotate-[5deg] justify-self-center rounded-[46%_54%_50%_50%/52%_46%_54%_48%] border-[2.5px]',
            markerBg[company.marker]
          )}
        />
        <div className="col-start-3 pl-3">
          <h3 className="text-[clamp(1.35rem,3vw,1.7rem)] leading-[1.15] font-[750] tracking-[-0.02em]">
            {company.name}
          </h3>
          <p className="text-ink-soft mt-0.5 font-mono text-[0.8125rem]">{company.span}</p>
        </div>
      </div>
      <ol className="mt-[22px] grid gap-[22px]">
        {company.roles.map((role) => (
          <RoleRow key={`${role.year}-${role.title}`} role={role} />
        ))}
      </ol>
    </li>
  );
}

export function Timeline({ timeline }: { timeline: Site['timeline'] }) {
  return (
    <section id={timeline.id} aria-labelledby={`${timeline.id}-title`} className="py-14">
      <SectionHead {...timeline} />
      <div className="timeline relative mt-7 max-w-[760px] [--lc:46px] [--yc:64px] max-[480px]:[--lc:38px] max-[480px]:[--yc:58px]">
        <svg
          className="absolute top-4 left-[calc(var(--yc)+var(--lc)/2-6px)] h-[calc(100%-32px)] w-3 overflow-visible"
          viewBox="0 0 12 1000"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            className="timeline-line stroke-ink-faint fill-none stroke-2 [stroke-linecap:round]"
            pathLength={1}
            d="M6 0 Q2 125 6 250 Q10 375 6 500 Q2 625 6 750 Q10 875 6 1000"
          />
        </svg>
        <ol className="grid gap-[52px]">
          {timeline.companies.map((company) => (
            <CompanyBlock key={company.name} company={company} />
          ))}
        </ol>
      </div>
      <p className="mt-10">
        <InkLink href={timeline.more.href}>{timeline.more.label}</InkLink>
      </p>
    </section>
  );
}
