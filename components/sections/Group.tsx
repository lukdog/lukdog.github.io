// A group of items under a highlighted title, laid out in as many columns as it has items.
import classNames from 'classnames';
import type { Group as GroupContent } from '@/content/types';
import { LightSwitch } from '@/components/ui/LightSwitch';
import { MarkerOnView } from '@/components/ui/Marker';
import { Note } from '@/components/ui/Note';
import { Item } from './Item';

const columns: Record<number, string> = {
  2: 'sm:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
};

export function Group({ group }: { group: GroupContent }) {
  return (
    <div className="mt-[72px]">
      <div className="mb-8 flex flex-wrap items-center gap-x-[18px] gap-y-2.5">
        <h3 className="text-[clamp(1.5rem,3.4vw,2.1rem)] leading-[1.15] font-[750] tracking-[-0.02em]">
          <MarkerOnView color={group.marker}>{group.title}</MarkerOnView>
        </h3>
        <Note>{group.note}</Note>
        {group.lightSwitch && <LightSwitch className="ml-auto" />}
      </div>
      <div className={classNames('grid gap-x-10 gap-y-11', columns[group.items.length])}>
        {group.items.map((item) => (
          <Item key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}
