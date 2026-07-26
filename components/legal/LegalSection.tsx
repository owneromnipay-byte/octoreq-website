import {
  LegalContentBlock,
  LegalSection as LegalSectionType,
} from "@/types/legal";

interface Props {
  section: LegalSectionType;
}

function renderBlock(block: LegalContentBlock, index: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p
          key={index}
          className="text-[15px] leading-8 text-muted-foreground"
        >
          {block.content as string}
        </p>
      );

    case "list":
      return (
        <div key={index} className="space-y-4">
          {block.title && (
            <h3 className="text-base font-semibold text-foreground">
              {block.title}
            </h3>
          )}

          <ul className="space-y-3 pl-6">
            {(block.content as string[]).map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="list-disc text-[15px] leading-7 text-muted-foreground marker:text-primary"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      );

    default:
      return null;
  }
}

export default function LegalSection({
  section,
}: Props) {
  return (
    <section
      id={section.id}
      className="scroll-mt-28 border-b border-border pb-14 last:border-0"
    >
      <header className="mb-8">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground">
          {section.title}
        </h2>
      </header>

      <div className="space-y-8">
        {section.blocks.map((block, index) =>
          renderBlock(block, index)
        )}
      </div>
    </section>
  );
}