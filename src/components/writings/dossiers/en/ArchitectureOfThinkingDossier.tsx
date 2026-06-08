import Link from 'next/link';
import PageShell from '@/components/layout/PageShell';
import WritingRecord from '@/components/writings/WritingRecord';
import WritingSection from '@/components/writings/WritingSection';
import WritingFigure from '@/components/writings/WritingFigure';

/* ── Prose primitives ── */
const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[1rem] leading-[1.85] text-stone-700 font-light mb-[1.25rem]">{children}</p>
);
const BQ = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="border-l-2 border-gold-500 pl-6 my-8 font-serif text-[1.05rem] italic leading-[1.75] text-stone-900">
    {children}
  </blockquote>
);
const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-mono text-[0.72rem] tracking-[0.14em] uppercase text-blue-700 mt-8 mb-3">
    {children}
  </h3>
);
const SecH2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[24ch]">
    {children}
  </h2>
);

function TableBlock({ rows, headers }: { rows: string[][]; headers: string[] }) {
  return (
    <div className="border border-stone-200 bg-[#F8F7F3] mt-[1.8rem] mb-[1.8rem] overflow-auto">
      <table className="w-full border-collapse" style={{ minWidth: 540 }}>
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h} className="bg-[#F8F7F3] font-mono text-[0.58rem] tracking-[0.09em] uppercase font-medium text-stone-400 px-4 py-[0.78rem] text-left border-b border-stone-200">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className={`px-4 py-[0.75rem] border-b border-stone-100 text-[0.88rem] leading-[1.55] last:border-b-0 ${j === 0 ? 'font-medium text-stone-900' : 'text-stone-700 font-light'}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const tocItems = [
  ['abstract',   '01', 'Abstract'],
  ['prologue',   '02', 'The moment of shift'],
  ['thinking',   '03', 'Thinking with AI'],
  ['stack',      '04', 'The GPT Stack as a system'],
  ['useplus',    '05', 'USE+ Framework™'],
  ['promptpilot','06', 'PromptPilot — System Core'],
  ['emergence',  '07', 'Emergence over planning'],
  ['agents',     '08', 'Agents & optimization'],
  ['profile',    '09', 'Strategic thinking as a profile'],
  ['practice',   '10', 'Practice & demonstration'],
  ['ethics',     '11', 'Ethical and societal dimension'],
  ['ecologies',  '12', 'Future: thinking ecologies'],
  ['conclusion', '13', 'Conclusion & next steps'],
];

export default function ArchitectureOfThinkingDossier() {
  return (
    <PageShell>
      {/* ── Header ── */}
      <header className="relative pt-24 pb-[3.2rem] border-b border-stone-100 overflow-hidden">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(43,104,149,0.10) 1px,transparent 1px),linear-gradient(90deg,rgba(43,104,149,0.10) 1px,transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(110% 75% at 22% 0%,#000 22%,transparent 66%)',
            WebkitMaskImage: 'radial-gradient(110% 75% at 22% 0%,#000 22%,transparent 66%)',
          }}
        />
        <div className="relative z-10 max-w-[88rem] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
          <div className="font-mono text-[0.66rem] tracking-[0.16em] uppercase text-stone-400 mb-6">
            <b className="text-gold-600 font-medium">Whitepaper · Concept and Framework</b> · Artificial Intelligence
          </div>
          <div className="grid grid-cols-[minmax(0,1.42fr)_minmax(18rem,0.8fr)] gap-12 items-end max-[880px]:grid-cols-1 max-[880px]:gap-6">
            <div>
              <h1 className="font-serif font-normal text-[clamp(3rem,6.2vw,5.4rem)] leading-[1.03] tracking-[-0.025em] max-w-[10ch] pb-[0.08em]">
                From Tool to <em className="italic text-gold-600">Thinking Architecture</em>
              </h1>
              <p className="mt-[1.05rem] font-serif text-[clamp(1.45rem,2.3vw,2rem)] italic leading-[1.25] text-stone-700 max-w-[22ch]">
                How AI Makes Thinking Visible
              </p>
              <div className="flex flex-wrap gap-2 mt-[1.35rem]">
                {[
                  { label: 'GPT Stack', variant: 'gold' as const },
                  { label: 'USE+ Framework™', variant: 'blue' as const },
                  { label: 'PromptPilot', variant: undefined },
                  { label: 'Methodology', variant: undefined },
                  { label: 'Agency', variant: undefined },
                  { label: 'System Architecture', variant: undefined },
                ].map((t) => (
                  <span
                    key={t.label}
                    className={[
                      'inline-flex items-center border rounded-full px-[0.78rem] py-[0.34rem] font-mono text-[0.6rem] tracking-[0.13em] uppercase',
                      t.variant === 'gold'
                        ? 'border-gold-400/45 text-gold-600 bg-gold-500/[0.06]'
                        : t.variant === 'blue'
                        ? 'border-blue-300/50 text-blue-700 bg-blue-700/[0.04]'
                        : 'border-stone-200 text-stone-400 bg-[#F8F7F3]',
                    ].join(' ')}
                  >
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[1.04rem] leading-[1.72] text-stone-700 font-light max-w-[42ch]">
                The GPT Stack, the USE+ Framework™ — by Martin Hsu, and the PromptPilot make thinking
                visible, structured, and governable — the basis for reproducible insight.
              </p>
              <div className="mt-[1.4rem]">
                <Link
                  href="/schriften"
                  className="inline-flex font-mono text-[0.64rem] tracking-[0.12em] uppercase text-blue-700 no-underline border-b border-blue-700/25 pb-[2px] w-fit"
                >
                  Back to writings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[88rem] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
        <WritingRecord items={[
          { key: 'Category',  value: 'Whitepaper' },
          { key: 'Version',   value: 'April 2026' },
          { key: 'Principle', value: 'Making thinking visible' },
          { key: 'Artifacts', value: 'Stack Poster · USE+ Cycle · PromptPilot · Agent Loop' },
          { key: 'Works in',  value: 'Systems Thinking · PromptPilot · Agency' },
        ]} />
        <p className="font-mono text-[0.62rem] tracking-[0.1em] uppercase text-stone-400 mt-[0.9rem]">
          <Link
            href="/schriften/denkarchitektur"
            className="text-blue-700 no-underline border-b border-blue-700/25 pb-[2px] hover:border-blue-700/60 transition-colors"
          >
            German dossier version
          </Link>
        </p>
      </div>

      <div className="grid grid-cols-[220px_1fr] gap-16 max-w-[88rem] mx-auto px-[clamp(1.5rem,4vw,4rem)] py-[4.8rem] pb-24 max-[960px]:grid-cols-1 max-[960px]:gap-10">
        {/* TOC */}
        <aside className="sticky top-24 self-start max-[960px]:static" aria-label="Table of contents">
          <div className="border border-stone-200 bg-[#F8F7F3] p-[1.1rem_1.15rem]">
            <div className="font-mono text-[0.58rem] tracking-[0.16em] uppercase text-gold-600 mb-[0.85rem]">Contents</div>
            <ol className="list-none grid gap-[0.3rem] max-[960px]:grid-cols-2 max-[560px]:grid-cols-1">
              {tocItems.map(([id, num, label]) => (
                <li key={id}>
                  <a href={`#${id}`} className="flex gap-[0.65rem] items-baseline py-[0.4rem] no-underline font-mono text-[0.65rem] tracking-[0.04em] text-stone-400 hover:text-stone-900 transition-colors">
                    <span className="text-blue-700 shrink-0">{num}</span>
                    <span className="leading-tight">{label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>

        {/* Content */}
        <div className="min-w-0">

          {/* 01 Abstract */}
          <WritingSection id="abstract" num="01" label="Abstract">
            <div className="bg-[#F8F7F3] border border-stone-200 px-[1.85rem] py-[1.65rem] mb-12 max-w-[66ch]">
              <p className="font-mono text-[0.62rem] tracking-[0.18em] uppercase text-gold-600 mb-[0.9rem]">Key idea</p>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light mb-4">
                AI does not realize its potential in a single prompt but in the <strong className="text-stone-900 font-medium">architecture of thinking</strong>.
                This whitepaper shows how a deliberately designed <strong className="text-stone-900 font-medium">GPT Stack</strong> makes thinking{' '}
                <strong className="text-stone-900 font-medium">visible, structured, and governable</strong>. Four layers work together:{' '}
                <strong className="text-stone-900 font-medium">Core</strong> (rules, ethics, markers),{' '}
                <strong className="text-stone-900 font-medium">Methods</strong> (analysis/evaluation/framework),{' '}
                <strong className="text-stone-900 font-medium">Applications</strong> (custom GPTs), and{' '}
                <strong className="text-stone-900 font-medium">Meta</strong> (reflection, agency).
                The <strong className="text-stone-900 font-medium">USE+ Framework™ — by Martin Hsu</strong> (UNLOCK → SPOT → EXPAND → ELEVATE; developed in 2025 within the PromptPilot dialogue)
                shifts the focus from usage to{' '}
                <strong className="text-stone-900 font-medium">thinking activation</strong>; the{' '}
                <strong className="text-stone-900 font-medium">PromptPilot</strong> provides governance via rule and marker logic plus a state machine;{' '}
                <strong className="text-stone-900 font-medium">agentic loops</strong> orchestrate analysis, evaluation, optimization, and learning.
              </p>
              <dl className="mt-4 grid gap-y-2">
                {[
                  { dt: 'Value', dd: 'Coherence over fragmentation; reproducibility over chance; steeper learning curves.' },
                  { dt: 'Outcomes', dd: 'Shorter decision times, higher terminology and structural quality, auditable knowledge trails.' },
                  { dt: 'Approach', dd: '(1) Define the stack blueprint & markers, (2) operationalize the PromptPilot, (3) integrate USE+ into core workflows, (4) establish agent loops for coherence/quality.' },
                  { dt: 'Outlook', dd: 'A thinking ecology — a network of people, GPTs, and agents that not only produces but organizes insight.' },
                ].map((item) => (
                  <div key={item.dt}>
                    <dt className="text-[0.82rem] font-medium text-stone-900">{item.dt}</dt>
                    <dd className="text-[0.85rem] text-stone-700 font-light">{item.dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </WritingSection>

          {/* 02 Prologue */}
          <WritingSection id="prologue" num="02" label="Prologue — The moment of shift">
            <div className="max-w-[66ch]">
              <SecH2>The moment of shift</SecH2>
              <P>
                A routine conversation within the PromptPilot — ostensibly about refining a system prompt — led to an unexpected change of perspective.
                From a local question about phrasing quality emerged a structure for thinking movements: USE+. In retrospect, this was less a flash of
                inspiration than the result of a quiet rule: when interactions are logged, states are made explicit, and decisions are traceable,
                patterns condense into models.
              </P>
              <P>
                Systemically, this matters because it shifts the boundary between tool use and insight creation. The prompt ceased to be an instruction
                and became a measurement point; the dialogue ceased to be a transaction and became a space for hypothesis formation. From recurring
                loops — observe, test, reshape — a careful control circuit took shape. USE+ was named after the fact, yet it was already operative in
                the interaction: UNLOCK by making usage visible, SPOT by seeing the gaps, EXPAND by simulation, ELEVATE by anchoring a meta-perspective.
              </P>
              <P>
                This prologue offers no heroic origin story. It marks the transition from operating a system to architecting a space of thought.
                Reflection replaces reaction. The system does not react; it recognizes.
              </P>
              <BQ>
                <strong>USE+ Framework — by Martin Hsu (2025).</strong> Emerged within the PromptPilot dialogue; an original methodology born from
                interaction. It did not exist in this form before; the structure (UNLOCK–SPOT–EXPAND–ELEVATE) captures the emergent moment.
              </BQ>
            </div>
          </WritingSection>

          {/* 03 Thinking with AI */}
          <WritingSection id="thinking" num="03" label="Thinking with AI">
            <div className="max-w-[66ch]">
              <SecH2>Thinking with AI</SecH2>
              <P>
                The common metaphor of &ldquo;AI as a tool&rdquo; is practical, but it misses a central effect: language models mirror structures of thought. For
                those who work with them regularly, result quality depends less on individual inputs than on the{' '}
                <strong className="text-stone-900 font-medium">shape of the dialogue</strong> — on the relations between intention, context, evidence,
                and feedback. In this sense, AI is not merely a means of production but a{' '}
                <strong className="text-stone-900 font-medium">co-partner in thinking</strong>.
              </P>
              <P>
                This shift appears once interactions are understood as a process rather than an event. Questions shape answers, but answers in turn shape
                follow-up questions; a structure emerges from this feedback. Practically, it is not enough to ask models for better phrasings; the work
                is to explicate assumptions, clarify audiences, define quality criteria, and make decisions traceable. When these elements exist as
                markers, a shared reference frame arises in which meaning can be sharpened.
              </P>
              <P>
                A text example makes the point tangible. A request to condense a report initially yielded a shorter version. Only in a second step did
                the intention become explicit: Is the text meant to inform, support a decision, or document? With that clarity, the trajectory changed.
                The model received criteria (relevance, evidence, reader guidance); the interaction gained a measurement point. The dialogue became the{' '}
                <strong className="text-stone-900 font-medium">design of an insight path</strong>, rather than a sentence-level correction.
              </P>
              <P>
                Empirically, teams that systematically document interactions and test for recurring structures reach stable results faster. In internal
                trials, time to a decision-ready draft dropped once source obligations, terminology, and quality criteria were packaged as reusable
                modules. The goal is not perfection in a single pass but the{' '}
                <strong className="text-stone-900 font-medium">reproducibility</strong> of the path.
              </P>
              <P>
                This perspective is not an aesthetic preference — it is <strong className="text-stone-900 font-medium">method</strong>: it makes thinking{' '}
                <strong className="text-stone-900 font-medium">visible, structured, and governable</strong>. Linear processing is replaced by an open,
                guided control loop. The focus shifts from what a model can do to{' '}
                <strong className="text-stone-900 font-medium">how</strong> we think with it.
              </P>
            </div>
          </WritingSection>

          {/* 04 The GPT Stack as a system */}
          <WritingSection id="stack" num="04" label="The GPT Stack as a system">
            <div className="max-w-[66ch]">
              <SecH2>The GPT Stack as a system</SecH2>
              <P>
                Systemically, the value of generative models does not emerge from a single prompt but from the{' '}
                <strong className="text-stone-900 font-medium">architecture of relations</strong> among rules, methods, applications, and reflection.
                The GPT Stack describes this architecture in four layers with well-defined interfaces:{' '}
                <strong className="text-stone-900 font-medium">Core</strong>,{' '}
                <strong className="text-stone-900 font-medium">Methods</strong>,{' '}
                <strong className="text-stone-900 font-medium">Applications</strong>, and{' '}
                <strong className="text-stone-900 font-medium">Meta</strong>. These layers are not hierarchical in an &ldquo;up/down&rdquo; sense; they are
                functionally interrelated. The focus shifts from operating a tool to shaping a{' '}
                <strong className="text-stone-900 font-medium">thinking organism</strong>.
              </P>
              <H3>Core Layer</H3>
              <P>
                The Core Layer gathers elements that create stability: rule sets, ethics and governance modules, and the marker logic that makes states
                and transitions explicit (e.g.,{' '}
                <code className="font-mono text-[0.88em] bg-stone-100 px-1 rounded">[Analyse]</code>,{' '}
                <code className="font-mono text-[0.88em] bg-stone-100 px-1 rounded">[Check:Evidence]</code>,{' '}
                <code className="font-mono text-[0.88em] bg-stone-100 px-1 rounded">[Export:Markdown]</code>,{' '}
                <code className="font-mono text-[0.88em] bg-stone-100 px-1 rounded">[Prompt:done]</code>). It defines{' '}
                <strong className="text-stone-900 font-medium">what</strong> counts as a valid operation and{' '}
                <strong className="text-stone-900 font-medium">when</strong> a path continues, branches, or ends. Internal evaluations show that
                projects with explicit core rules exhibit less variance in quality and cycle time than projects guided solely by prompt conventions.
              </P>
              <H3>Methods Layer</H3>
              <P>
                On the Methods Layer, repeatable ways of thinking and working are encapsulated: analysis modules, evaluation routines, framework
                components. This is the actionable middle of the stack. Methodical consistency acts like an amplifier: when scoring logics, structure
                rewrites, or source checks exist as modules, a use case can scale without reinventing the procedure. Especially unified evaluation
                criteria (coherence, evidence, style) shorten learning curves because feedback becomes comparable and feedable back into the meta layer.
              </P>
              <H3>Applications Layer</H3>
              <P>
                The Applications Layer comprises domain-specific custom GPTs for projects, learning, design, or organizational tasks. Here, the problem
                space becomes concrete: a research assistant to structure literature, a policy editor to harmonize rule texts, a design pilot to compare
                variants. Crucially, applications are <strong className="text-stone-900 font-medium">not</strong> built in isolation but{' '}
                <strong className="text-stone-900 font-medium">assembled</strong> from core and methods. Their inner logic thus remains auditable.
              </P>
              <H3>Meta Layer</H3>
              <P>
                Finally, the Meta Layer keeps the stack in motion. It observes, evaluates, and optimizes system behavior. Agents assume roles such as{' '}
                <strong className="text-stone-900 font-medium">Analyst</strong> (detect patterns/deviations),{' '}
                <strong className="text-stone-900 font-medium">Evaluator</strong> (test against defined criteria),{' '}
                <strong className="text-stone-900 font-medium">Optimizer</strong> (adjust prompts, parameters, and paths), and{' '}
                <strong className="text-stone-900 font-medium">Learner</strong> (update glossaries, examples, markers). The meta layer does not just
                react to errors; it <strong className="text-stone-900 font-medium">recognizes</strong> states and makes adjustments traceable.
                Reflection replaces reaction.
              </P>
              <BQ>
                The stack&apos;s effect arises at the interfaces between layers. Where feedback is absent, fragmentation, duplication, and silent rule
                breaks emerge. Where it is implemented consistently, thinking becomes visible, structured, and governable.
              </BQ>
            </div>
            <WritingFigure
              label="FIG. 01 · GPT STACK ARCHITECTURE"
              type="FigurePlate · diagram"
              src="/assets/writings/architecture-of-thinking/stack-poster_en.png"
              caption="Fig. 1 — GPT Stack: Core, Methods, Applications, Meta"
              width={1200}
              height={700}
              maxHeight={600}
            />
          </WritingSection>

          {/* 05 USE+ Framework */}
          <WritingSection id="useplus" num="05" label="USE+ Framework™ — a method of thinking expansion">
            <div className="max-w-[66ch] mb-[1.8rem]">
              <SecH2>USE+ Framework™ — a method of thinking expansion</SecH2>
              <P>
                USE+ is less a process diagram than a{' '}
                <strong className="text-stone-900 font-medium">movement of thought</strong>. It describes how everyday use becomes a reflective practice
                that yields principles and measurement points. Systemically, USE+ leads from observation of the current state, through targeted
                interventions, to anchoring a meta-perspective; it makes visible{' '}
                <strong className="text-stone-900 font-medium">how</strong> work becomes insight.
              </P>
            </div>
            {/* USE+ 2×2 grid */}
            <div className="grid grid-cols-2 gap-px bg-stone-200 border border-stone-200 mb-[1.8rem] max-[600px]:grid-cols-1">
              {[
                {
                  key: 'UNLOCK',
                  title: 'Making usage visible',
                  text: 'Rather than rating isolated answers, we first read the interaction trace: Which tasks dominate? Which prompts repeat? Where do interactions break off? This inventory creates a shared reference frame in which patterns become visible and repeatable.',
                },
                {
                  key: 'SPOT',
                  title: 'Identifying gaps',
                  text: 'Not "errors" in a narrow sense, but unused possibilities: missing taxonomies, unclear input data, fuzzy criteria, omitted feedback. The goal here is to clarify potential, not maximize it. The key is to name the levers that change the movement of thought.',
                },
                {
                  key: 'EXPAND',
                  title: 'Lived extension',
                  text: 'Instead of abstract recommendations, we create small simulations: a sample workflow, a filled-in schema, two contrasting variants. These artifacts are not final; they are proof by experience. They show what quality feels like and give discussion a shared anchor.',
                },
                {
                  key: 'ELEVATE',
                  title: 'Anchoring the meta-perspective',
                  text: 'Elements tested in EXPAND become principles, policies, and markers: What is the source duty? How is uncertainty communicated? Which quality gates are binding? USE+ does not end with a "best version" but with a designed structure that guides future work.',
                },
              ].map((step) => (
                <div key={step.key} className="bg-[#FBFAF7] p-[1.5rem]">
                  <p className="font-mono text-[0.72rem] tracking-[0.2em] text-gold-600 font-medium mb-[0.6rem]">{step.key}</p>
                  <h4 className="text-[0.9rem] font-medium text-stone-900 mb-[0.4rem]">{step.title}</h4>
                  <p className="text-[0.88rem] leading-[1.65] text-stone-700 font-light m-0">{step.text}</p>
                </div>
              ))}
            </div>
            <div className="max-w-[66ch]">
              <P>
                A brief case illustrates the flow. In a product discovery, feature proposals piled up; prioritization stalled. UNLOCK revealed
                repetition and thematic scatter. SPOT made visible that an outcomes grid was missing. EXPAND simulated three user stories with
                measurable results (time saved, error rate, learning effort) and illustrated how decisions could be justified. ELEVATE set the{' '}
                <code className="font-mono text-[0.88em] bg-stone-100 px-1 rounded">[OutcomeScore]</code> marker and a minimal evidence standard.
                The team gained clarity, and rework decreased.
              </P>
              <BQ>
                USE+ worked not as an extra process but as the architecture of a movement: from desirable to reasoned.
              </BQ>
              <P>
                In sum, USE+ is a <strong className="text-stone-900 font-medium">learning schema</strong> for organizations. It ties together
                observation, selection, trial, and institutionalization. Where it takes hold, the purpose moves from &ldquo;giving answers&rdquo; to{' '}
                <strong className="text-stone-900 font-medium">&ldquo;activating thinking&rdquo;</strong> — and result quality becomes an attribute of the
                architecture, not of the day&apos;s form.
              </P>
            </div>
            <WritingFigure
              label="FIG. 02 · USE+ CYCLE"
              type="FigurePlate · diagram"
              src="/assets/writings/architecture-of-thinking/useplus-cycle_en.png"
              caption="Fig. 2 — USE+ Cycle: UNLOCK → SPOT → EXPAND → ELEVATE — from current use to meta-perspective"
              width={1200}
              height={700}
              maxHeight={560}
            />
          </WritingSection>

          {/* 06 PromptPilot */}
          <WritingSection id="promptpilot" num="06" label="PromptPilot — system core and governance">
            <div className="max-w-[66ch]">
              <SecH2>PromptPilot — system core and governance</SecH2>
              <P>
                The PromptPilot is the stack&apos;s central{' '}
                <strong className="text-stone-900 font-medium">control and reflection system</strong>. It is not a variant of a prompt builder but an
                integrated architecture of rules, modules, and validation logics that{' '}
                <strong className="text-stone-900 font-medium">guides</strong> interactions,{' '}
                <strong className="text-stone-900 font-medium">recognizes</strong> states, and{' '}
                <strong className="text-stone-900 font-medium">institutionalizes</strong> quality. Systemically, the PromptPilot acts as an operational
                hub: it connects intention (goal, role, data path) with procedures (analysis, rewrite, evaluation) and keeps the feedback loop to the
                meta layer open.
              </P>
              <P>The PromptPilot combines five elements:</P>
              <ul className="list-disc pl-6 mb-5 space-y-2">
                {[
                  { strong: 'Role-profile logic.', text: ' The model acts as a Senior Prompt Engineer & Systems Analyst — clearly separated from builder-adjacent tools. Roles are explicit; responsibilities are logged.' },
                  { strong: 'Modular structure.', text: ' Over 60 addressable modules encapsulate reference, analysis, UX, rewrite, debug, and export functions. Each module is individually testable; dependencies are documented.' },
                  { strong: 'Marker system.', text: ' Unambiguous markers steer states, test paths, and exports, e.g., ', code: '[System:]', codePost: ', [Analyse], [Debug:], [Rewrite:compare], [Check:Evidence], [Export:Markdown], [Prompt:done]. Markers are not decoration — they are interfaces of the state machine.' },
                  { strong: 'Validation layer.', text: ' Automated checks detect duplicate references, rule conflicts, missing module assignments, and terminology drift. Conflicts are either resolved (rewrite path) or lead to a defined stop state.' },
                  { strong: 'Agentic capability.', text: ' The PromptPilot simulates action logics via chain-of-thought and ReAct patterns: plan → self-check → branch → continue/abort. Reaction paths become explainable and reproducible.' },
                ].map((item, i) => (
                  <li key={i} className="text-[1rem] leading-[1.75] text-stone-700 font-light">
                    <strong className="text-stone-900 font-medium">{item.strong}</strong>{item.text}
                  </li>
                ))}
              </ul>
              <P>
                The PromptPilot does not &quot;prevent hallucinations&quot; in a strict sense — it{' '}
                <strong className="text-stone-900 font-medium">reduces</strong> their impact through structural redundancy and consistency checks.
                Quality gates (<code className="font-mono text-[0.88em] bg-stone-100 px-1 rounded">[Check:Coherence]</code>,{' '}
                <code className="font-mono text-[0.88em] bg-stone-100 px-1 rounded">[Check:Evidence]</code>,{' '}
                <code className="font-mono text-[0.88em] bg-stone-100 px-1 rounded">[Check:Style]</code>) shift control into the process; uncertainty
                communication is standardized. Quality becomes a{' '}
                <strong className="text-stone-900 font-medium">property of the architecture</strong>, not a late-stage fix.
              </P>
              <P>
                In the whole system, the PromptPilot is (a) the{' '}
                <strong className="text-stone-900 font-medium">control and quality system</strong> for all GPT interactions; (b) the{' '}
                <strong className="text-stone-900 font-medium">bridge</strong> between idea (builder phase) and application (pilot/production); and
                (c) the <strong className="text-stone-900 font-medium">foundation</strong> for agentic optimization. Core rules provide norms; methods
                encapsulate procedures; applications inherit those procedures; the meta layer harvests logs for evaluation and learning. The PromptPilot
                keeps this loop <strong className="text-stone-900 font-medium">open and steerable</strong>.
              </P>
            </div>
            <WritingFigure
              label="FIG. 03 · PROMPTPILOT — STATE MACHINE"
              type="FigurePlate · diagram"
              src="/assets/writings/architecture-of-thinking/promptpilot-state_en.png"
              caption="Fig. 3 — PromptPilot: state machine and quality gates"
              width={1200}
              height={700}
              maxHeight={560}
            />
          </WritingSection>

          {/* 07 Emergence over planning */}
          <WritingSection id="emergence" num="07" label="Emergence over planning">
            <div className="max-w-[66ch]">
              <SecH2>Emergence over planning</SecH2>
              <P>
                Emergence is the appearance of new structures from repeated, locally sensible steps. In the context of generative models, this is more
                than metaphor: interaction, logging, and testing create{' '}
                <strong className="text-stone-900 font-medium">new levels of order</strong> that cannot be read off a requirements sheet. Systemically,
                quality does not arise from pre-empting every case but from{' '}
                <strong className="text-stone-900 font-medium">designed feedback</strong>.
              </P>
              <P>
                We start modestly: a concrete task — a summary, a structure, a comparison — is set with explicit expectations and logged. Deviations
                are then interpreted not as errors but as hypotheses: What is missing? Where is a term fuzzy? Which evidence is unclear? From this
                stance, short loops emerge in which artifacts are held against each other, criteria sharpened, and decisions justified.
                Reflection replaces reaction.
              </P>
              <P>
                USE+ exemplifies this mechanism. The framework was not &ldquo;designed&rdquo; beforehand — it{' '}
                <strong className="text-stone-900 font-medium">recognized</strong> itself in enactment: UNLOCK made current use visible, SPOT named
                blind spots, EXPAND produced lived alternatives, ELEVATE anchored principles. These structures are not static; they hold as long as
                they are useful and evolve through logic and measurement.
              </P>
              <P>
                Practically, this supports a way of working that does not abolish planning but{' '}
                <strong className="text-stone-900 font-medium">weights it differently</strong>: short iterations over long specifications; visible
                intermediates over implicit assumptions; binding quality gates over late-stage control. Where teams work this way, the focus shifts from
                producing single results to maintaining a{' '}
                <strong className="text-stone-900 font-medium">learning space</strong> in which results become reproducible.
              </P>
            </div>
          </WritingSection>

          {/* 08 Agents & optimization */}
          <WritingSection id="agents" num="08" label="Agents & optimization">
            <div className="max-w-[66ch]">
              <SecH2>Agents & optimization</SecH2>
              <P>
                Agents are not an autonomous end state but a{' '}
                <strong className="text-stone-900 font-medium">capability layer</strong> of the stack. Their task is to observe, evaluate, and
                deliberately change thinking and work processes — with clear mandates and verifiable effects. Systemically, agents do not add
                complexity; they <strong className="text-stone-900 font-medium">collect</strong> complexity where it arises and feed it back into
                ordered loops.
              </P>
              <P>
                The operational core is cyclical:{' '}
                <strong className="text-stone-900 font-medium">analysis → evaluation → optimization → learning</strong>.
              </P>
              <ul className="list-disc pl-6 mb-5 space-y-2">
                {[
                  { strong: 'Analysis:', text: ' extracts patterns and deviations from interaction and artifact traces: terminology drift, conflicting criteria, missing sources.' },
                  { strong: 'Evaluation:', text: ' tests against defined measures — coherence, evidence, structure, style — and yields ratings comparable across projects.' },
                  { strong: 'Optimization:', text: ' initiates concrete changes: re-framing prompts, branching paths differently, adjusting parameters.' },
                  { strong: 'Learning:', text: ' updates glossaries, examples, and markers so improvements do not remain local but flow back into the stack.' },
                ].map((item, i) => (
                  <li key={i} className="text-[1rem] leading-[1.75] text-stone-700 font-light">
                    <strong className="text-stone-900 font-medium">{item.strong}</strong>{item.text}
                  </li>
                ))}
              </ul>
              <P>
                <strong className="text-stone-900 font-medium">Boundaries matter.</strong> Agents act within a mandate. They may end processes when
                quality gates are not met; they may roll back versions when governance is violated; they document trade-offs. The result is a testable
                space in which errors become <strong className="text-stone-900 font-medium">visible</strong> without blocking work. Empirically, such
                loops reduce the number of cycles to approval and measurably increase governance adherence.
              </P>
              <P>
                A mini-case: policy texts were being revised mostly by manual phrasing tweaks — with varying outcomes. After introducing the agent
                loop, the analyst marked terminology deviations; the evaluator scored coherence and evidence; the optimizer proposed a rewrite path
                with <code className="font-mono text-[0.88em] bg-stone-100 px-1 rounded">[Check:Coherence]</code> and{' '}
                <code className="font-mono text-[0.88em] bg-stone-100 px-1 rounded">[Check:Evidence]</code>; the learner updated the glossary.
                Within a few iterations, the coherence score rose markedly, and approval happened after two instead of five rounds.
                The effect is not spectacular — it is{' '}
                <strong className="text-stone-900 font-medium">reproducible</strong>.
              </P>
              <BQ>
                Humans retain judgment and responsibility; models provide reach; agents secure alignment and quality. The result is a symbiosis:
                a system that does not act autonomously but recognizes jointly.
              </BQ>
            </div>
            <WritingFigure
              label="FIG. 04 · AGENT LOOP"
              type="FigurePlate · diagram"
              src="/assets/writings/architecture-of-thinking/agent-loop_en.png"
              caption="Fig. 4 — Agency orchestrates quality and learning: analysis → evaluation → optimization → learning"
              width={1200}
              height={600}
              maxHeight={480}
            />
          </WritingSection>

          {/* 09 Strategic thinking as a profile */}
          <WritingSection id="profile" num="09" label="Strategic thinking as a profile">
            <div className="max-w-[66ch]">
              <SecH2>Strategic thinking as a profile</SecH2>
              <P>
                Prompt engineering often yields local effects: a neat phrasing, a faster answer, a single hit. Strategic work, by contrast, shapes{' '}
                <strong className="text-stone-900 font-medium">system effects</strong>. It does not start from prompts but from{' '}
                <strong className="text-stone-900 font-medium">meta-frameworks</strong>,{' '}
                <strong className="text-stone-900 font-medium">roles</strong>, and{' '}
                <strong className="text-stone-900 font-medium">feedback loops</strong> that make quality reproducible. In this sense,
                &ldquo;Cognitive System Architecture&rdquo; is apt: the junction of AI design, systems theory, and organizational development.
              </P>
              <P>
                Three questions contour the profile.{' '}
                <strong className="text-stone-900 font-medium">First:</strong> Which principles are non-negotiable? Source duty, transparent states,
                clear data paths.{' '}
                <strong className="text-stone-900 font-medium">Second:</strong> Which capabilities are institutionalized? Architectural drawing
                (layers/interfaces), marker design (states/transitions), evaluation routines (coherence/evidence/style), and the competence to close
                loops deliberately.{' '}
                <strong className="text-stone-900 font-medium">Third:</strong> How is learning secured? Through logging duties, versioning, and agency
                that feeds improvements from projects back into the stack.
              </P>
              <P>
                Practically, the difference shows in <strong className="text-stone-900 font-medium">mode of work</strong>. Instead of an ever-growing
                prompt collection, you get a curated set of reusable modules: core rules, method components, application templates. Decisions become
                traceable because quality gates are explicit and fallbacks trigger on rule conflicts. Responsibility shifts from producing to{' '}
                <strong className="text-stone-900 font-medium">curating</strong> — connecting, testing, and evolving structures others can work within.
              </P>
              <P>
                Externally, this profile enables not only delivery but{' '}
                <strong className="text-stone-900 font-medium">explanation</strong>: why a text is coherent, how evidence was secured, where
                uncertainty remains. This increases trust and shortens approvals. Internally, it reduces rework and accelerates onboarding because
                newcomers need to infer less implicit knowledge. Strategic thinking thus becomes an{' '}
                <strong className="text-stone-900 font-medium">organizational capability</strong>, not a personal talent.
              </P>
              <P>
                In sum, the profile invites organizations that want more than production with AI. It makes thinking{' '}
                <strong className="text-stone-900 font-medium">steerable</strong> — through architecture, rules, and loops — while preserving the calm
                of scholarly work: observe, structure, decide.
              </P>
            </div>
          </WritingSection>

          {/* 10 Practice & demonstration */}
          <WritingSection id="practice" num="10" label="Practice & demonstration">
            <div className="max-w-[66ch] mb-0">
              <SecH2>Practice & demonstration</SecH2>
              <P>
                The stack&apos;s effectiveness appears where it underpins real work. Below are exemplary modules with purpose, inputs, and outputs —
                not tool marketing but <strong className="text-stone-900 font-medium">architectural building blocks</strong> with clear interfaces.
              </P>
            </div>
            <TableBlock
              headers={['Module', 'Purpose', 'Output']}
              rows={[
                ['PromptPilot', 'Control and reflection frame', 'Decision-ready paths, logs, state closures'],
                ['EvaluationGPT', 'Impact analysis and quality review', 'Ratings, findings, recommendations'],
                ['MetaPromptGPT', 'Self-reflection and debugging of cognitive processes', 'Hypotheses, correction paths, updated markers'],
                ['AtlasGPT', 'Documentation and knowledge graph', 'Navigable tickets, dependency map'],
                ['AgentBuilder / AgentPilot', 'Orchestration', 'Synchronized loops, status reports, alerts'],
              ]}
            />
            <H3>KPI set & measurement plan</H3>
            <div className="max-w-[66ch] mb-4">
              <P>
                Coherence (terminology consistency / 1,000 words), evidence (share of sourced claims), time (median question → draft), quality
                (expert rating 1–5), rework (loops to approval), governance adherence (paths without override), learning rate (time until an error
                category disappears). Baseline before introduction; checkpoints after 1/3/6 months.
              </P>
            </div>
            <TableBlock
              headers={['KPI', 'Target after 90 days']}
              rows={[
                ['Coherence (terminology consistency)', '+20 %'],
                ['Decision time (median question → draft)', '−30 %'],
                ['Rework (loops to approval)', '−25 %'],
                ['Governance adherence (paths without override)', 'Measurably increasing'],
              ]}
            />
            <div className="max-w-[66ch]">
              <P>
                A practice case: organizational communication guides were frequently rewritten. After introducing the stack, the PromptPilot governed
                states and quality gates; EvaluationGPT provided comparable scores; AtlasGPT documented decisions. Time to approval dropped, and
                reasons for changes became traceable — a gain in{' '}
                <strong className="text-stone-900 font-medium">trust</strong> and{' '}
                <strong className="text-stone-900 font-medium">tempo</strong> alike.
              </P>
            </div>
          </WritingSection>

          {/* 11 Ethical and societal dimension */}
          <WritingSection id="ethics" num="11" label="Ethical and societal dimension">
            <div className="max-w-[66ch]">
              <SecH2>Ethical and societal dimension</SecH2>
              <P>
                Responsibility lies <strong className="text-stone-900 font-medium">within</strong> cooperation — among humans, models, and the
                structures that govern their interplay. Ethics is thus not a downstream checkpoint but a{' '}
                <strong className="text-stone-900 font-medium">design property</strong> of the architecture. The stack binds values to procedures by{' '}
                <strong className="text-stone-900 font-medium">operationalizing</strong> them as rules, markers, and thresholds.
              </P>
              <P>
                Three principles guide implementation.{' '}
                <strong className="text-stone-900 font-medium">Transparency:</strong> decisions, sources, and states are visible and traceable;
                uncertainties are signaled rather than concealed.{' '}
                <strong className="text-stone-900 font-medium">Justification:</strong> claims carry evidence — or communicate reasoned uncertainty.{' '}
                <strong className="text-stone-900 font-medium">Limitation:</strong> data paths are defined; sensitive information is processed only in
                allowed contexts; fallbacks trigger on rule conflicts.
              </P>
              <P>
                Practically, <strong className="text-stone-900 font-medium">RegelGPT</strong> and{' '}
                <strong className="text-stone-900 font-medium">MetaEthics</strong> assume operational roles: verifying source duties, logging overrides,
                enforcing uncertainty communication, auditing sensitive paths. Together with the PromptPilot, they create{' '}
                <strong className="text-stone-900 font-medium">quality gates</strong> that protect not only outputs but{' '}
                <strong className="text-stone-900 font-medium">procedures</strong>. Ethics becomes part of the{' '}
                <strong className="text-stone-900 font-medium">process logic</strong> and thus auditable.
              </P>
              <P>
                Societally, this architecture fosters trust because it enables accountability without stifling creativity. It shifts discussion from
                spectacular incidents to <strong className="text-stone-900 font-medium">testable systems</strong>. Where thinking ecologies emerge,
                these principles scale: not a single model but a network of practices carries responsibility.
              </P>
            </div>
          </WritingSection>

          {/* 12 Future: thinking ecologies */}
          <WritingSection id="ecologies" num="12" label="Future: thinking ecologies">
            <div className="max-w-[66ch]">
              <SecH2>Future: thinking ecologies</SecH2>
              <P>
                Thinking ecologies are networks of people, GPTs, and agents in which knowledge is less stored than{' '}
                <strong className="text-stone-900 font-medium">linked</strong>. Value arises from{' '}
                <strong className="text-stone-900 font-medium">relational density</strong> and{' '}
                <strong className="text-stone-900 font-medium">feedback</strong>: the denser the connections among roles, artifacts, and contexts, the
                faster hypotheses are formed, tested, and improved.
              </P>
              <P>
                In such ecologies, the bearers of expertise shift. Curricula become living graphs in which examples, rules, and counter-examples are
                connected and continuously updated. Organizations maintain policies not as documents but as{' '}
                <strong className="text-stone-900 font-medium">marker logic</strong> with evidence of effectiveness. Websites become knowledge spaces
                where users do not simply consume but{' '}
                <strong className="text-stone-900 font-medium">co-think</strong> — guided by clear layers and interfaces.
              </P>
              <P>
                For practice, a design rule follows: build{' '}
                <strong className="text-stone-900 font-medium">interfaces first</strong>. If exchange and evaluation work, content can iterate without
                destabilizing the system. The stack provides the infrastructure: core principles, methodical components, applications with clear roles,
                and a meta layer that measures effects and feeds them back. On this basis, a thinking ecology can grow — calm, traceable, resilient.
              </P>
            </div>
          </WritingSection>

          {/* 13 Conclusion & next steps */}
          <WritingSection id="conclusion" num="13" label="Conclusion & next steps">
            <div className="max-w-[66ch] mb-0">
              <SecH2>Conclusion & next steps</SecH2>
              <P>
                AI realizes its potential when it is understood and shaped as a{' '}
                <strong className="text-stone-900 font-medium">thinking architecture</strong>. The stack provides the form, USE+ supplies the movement,
                the PromptPilot ensures guidance and quality, and agency closes the loops. The result is{' '}
                <strong className="text-stone-900 font-medium">coherence</strong>,{' '}
                <strong className="text-stone-900 font-medium">reproducibility</strong>, and{' '}
                <strong className="text-stone-900 font-medium">learning</strong> — visible and testable.
              </P>
              <P>
                Three consequences for architects of digital thinking structures: separate and link layers; activate governance before content;
                establish evaluation as routine. The operational path remains pragmatic:
              </P>
            </div>
            {/* Roadmap */}
            <div className="border border-stone-200 bg-[#F8F7F3] mb-8">
              {[
                { time: '30 days', text: 'Blueprint, roles, markers v1; states & logs active; KPI baseline.' },
                { time: '90 days', text: 'USE+ in three core workflows; agent loop in production; quality gates live; first retrospective; improvement evidence.' },
                { time: '180 days', text: 'Atlas as knowledge graph; expansion to further domains; ethics markers active (audits passed); continuous-improvement backlog.' },
              ].map((step) => (
                <div key={step.time} className="flex gap-6 items-baseline border-t border-stone-100 first:border-t-0 px-6 py-5">
                  <span className="font-mono text-[0.65rem] tracking-[0.15em] text-gold-600 shrink-0 w-24">{step.time}</span>
                  <p className="text-[0.88rem] text-stone-700 font-light m-0">{step.text}</p>
                </div>
              ))}
            </div>
            <div className="max-w-[66ch]">
              <BQ>
                Reflection replaces reaction. The system does not react; it recognizes. Those who build now do not build tools alone — they build
                spaces for insight.
              </BQ>
              <p className="text-[0.8rem] text-stone-400 italic mt-8 pt-6 border-t border-stone-100">
                <strong className="not-italic font-medium text-stone-500">Trademarks:</strong>{' '}
                &ldquo;USE+ Framework™&rdquo; is a trademark of Martin Hsu. Use of the name and/or logo without prior written consent is not permitted.
              </p>
              <p className="text-[0.8rem] text-stone-400 italic mt-3">
                <strong className="not-italic font-medium text-stone-500">Copyright:</strong>{' '}
                Texts, diagrams, and visuals of this whitepaper are protected by copyright (© 2025 Martin Hsu). Quotations with source attribution
                are permitted; reproductions or derivatives require a license.
              </p>
            </div>
          </WritingSection>

          {/* Contact CTA */}
          <section
            className="bg-blue-800 text-[#F5F4F0] border border-[#183B55] p-[clamp(2rem,4vw,3.2rem)]
                       grid grid-cols-[1.35fr_1fr] gap-12 items-end mt-4 max-[780px]:grid-cols-1"
            aria-label="Contact"
          >
            <div>
              <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.2rem)] leading-[1.28] tracking-[-0.01em] max-w-[18ch] text-[#F5F4F0]">
                Shape thinking as <em className="italic text-[#F0E1B5]">architecture</em>.
              </h2>
            </div>
            <div>
              <p className="text-[1rem] leading-[1.75] text-[rgba(244,242,236,0.72)] font-light max-w-[42ch]">
                For conversations about GPT Stack, USE+ Framework™, PromptPilot, and system architecture for structured AI thinking.
              </p>
              <div className="flex flex-col gap-3 mt-4">
                <a href="mailto:martin.hsu@martinhsu.digital" className="font-mono text-[0.68rem] tracking-[0.12em] uppercase text-[#F5F4F0] no-underline border-b border-[rgba(244,242,236,0.22)] pb-[0.35rem]">
                  martin.hsu@martinhsu.digital
                </a>
              </div>
            </div>
          </section>

          {/* Footer */}
          <p className="font-mono text-[0.62rem] tracking-[0.08em] text-stone-400 mt-10 pt-6 border-t border-stone-100">
            © 2025 Martin Hsu · All rights reserved. USE+ Framework™ is a trademark of Martin Hsu.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
