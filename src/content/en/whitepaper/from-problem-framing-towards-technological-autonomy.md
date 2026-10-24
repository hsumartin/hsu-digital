---
title: "From Problem Framing towards Technological Autonomy"
subtitle: "A source-grounded case study of a method-driven, AI-assisted approach to developing a local agent system"
documentType: "Methodological whitepaper / exploratory retrospective single-case study"
version: "English parallel edition of public working draft V1.6.1"
date: "2026-10-23"
locale: "en"
status: "Public publication draft – editorially prepared, not approved for publication"
sourcePolicy: "Historical materials remain historical evidence and do not constitute current architectural authority"
implementationStatus: "MVP implementation and technical verification are not demonstrated in this paper"
---

# From Problem Framing towards Technological Autonomy

*A Case Study of a Method-Driven, AI-Assisted Approach to Developing a Local Agent System*

**English parallel edition of public working draft V1.6.1 · 23 October 2026**  
**Nature of this document:** A methodological whitepaper with a historical research focus. It does not demonstrate the implementation, security or effectiveness of the proposed local AI agent system.

<figure class="whitepaper-illustration whitepaper-illustration--hero">
  <img src="/assets/writings/from-problem-framing-towards-technological-autonomy/wp-methodik-01-hero.webp" alt="An abstract meeting of landscape and architectural forms, traced by precise blue and gold lines." width="1536" height="355" loading="eager" decoding="async" />
  <figcaption>Conceptual illustration: From an open-ended problem to a structured vision of a system.</figcaption>
</figure>

## Abstract

To what extent can existing interdisciplinary expertise, systematic project work and generative AI help people enter new technical fields? This case study explores that question through the origins of a project for a local AI agent system. It did not begin with a request to write code. Its development moved from designing specialised Custom GPTs to difficulties transferring work between them, and ultimately to questions about resource consumption in multi-stage, cloud-based AI workflows.

The historical material includes early conversations about organising chats and topics in May 2025, preserved Custom GPT configurations and later GPT-stack documents, concept notes and conversation summaries concerning the local system vision in spring 2026, and subsequent research and process documents. Among these are a Phase 1 research brief, a scan registry and a documented Phase 2 process model. These materials are supplemented by personal recollections of education, professional experience and the use of different AI services. They reveal important stages of the development but do not provide an uninterrupted timeline, a causal measurement of effectiveness or a conclusive assessment of skills acquired.

A central finding is a **shift in the problem itself**: from building capable, specialised Custom GPTs towards asking how open-ended human reflection, reliable working state and coordinated technical processing could be brought together. The approach to the project also became more systematic. Broad exploration, explicitly separated from decision-making, and a more differentiated process model show an increasing methodological separation of requirements work, architecture preparation and technology decisions. This does not mean every planned activity was completed, nor does it establish that the approach is generally superior. It does, however, provide a documented case for examining AI as a means of working across disciplinary boundaries.

**A distinction to maintain throughout:** Producing a result with AI is not the same as independently acquiring expertise. An architecture proposal is not evidence of implementation. Running a system locally is not, by itself, proof of digital sovereignty.

## 1. Research Interest and Guiding Question

Public discussions of generative AI and software development often begin with code generation: what can be built through natural-language instructions? The process examined here begins earlier. Before any possible implementation, tasks were analysed, behavioural rules formulated, specialised AI roles designed, coordination problems identified and the project divided into distinct research and decision-making phases.

The guiding question is therefore:

> To what extent can established methodological and interdisciplinary capabilities, combined with AI-assisted access to knowledge and a systematically managed development process, enable a person to move from a specific limitation in use towards independently conceiving, and subsequently assessing, a complex technical system?

Four subsidiary questions follow:

1. Which existing experiences and capabilities shaped how the problem was perceived and addressed?
2. Which experiences of use shifted the undertaking from individual specialised Custom GPTs towards a wider agent system?
3. How were exploration, requirements, architectural decisions and implementation separated methodologically?
4. What can actually be supported by evidence concerning new possibilities for action, personal understanding and the limits of AI assistance?

The subject is the development process as it occurred. The study does not aim to validate a predetermined success narrative.

## 2. Method, Sources and Limits of the Claims

### 2.1 Case study design

The original system concept and substantive responsibility for the project belong to the author, who also initiated the project and participated in the development being reconstructed. Generative AI assisted with the historical analysis, organisation, drafting and editorial review of this whitepaper. The author remains responsible for selecting and interpreting the claims and for its eventual publication. Access to personal working documents and earlier decision contexts assists reconstruction, but memory can be selective and later interpretation may influence the account. Contemporary documents, retrospective statements and analytical conclusions are therefore distinguished. AI-assisted review of the text is not treated as independent scholarly peer review.

This is a **retrospective, exploratory single-case study**. It combines analysis of historical project material with personal recollections. The emergence of technical concepts, methodological practice and the possible development of human capabilities are considered separately. It is not a controlled intervention study, an experiment measuring learning outcomes or a representative survey of AI-assisted software development.

### 2.2 Categories of sources

The reconstruction draws on a **non-public archive of project-specific working materials**. These are documentary sources about the development process, not academic research literature. The following categories are distinguished.

**Early configuration and design artefacts:** Preserved system instructions and descriptions of roles and modules for specialised Custom GPTs, together with early designs for an overarching GPT stack. They indicate intended functions, workflows and behavioural rules, but do not establish that the configurations worked reliably.

**Historical concept and process documents:** Proposals for collaboration between specialised assistants, structured handoff, separating reflection from orchestration, and project, research and process plans. These include a Phase 1 research brief expressly designed to avoid decisions, a corresponding register of 35 scan entries and a Phase 2 process model. Such documents establish what was envisaged, not necessarily that every step was carried out.

**Later reconstructions and conversation summaries:** Materials that retrospectively organise earlier ideas, conceptual states and their evolution. They are useful for understanding the content, but cannot replace contemporary evidence of when an idea first arose.

**Personal recollections:** Accounts of education and professional practice, the presumed start of work on ThemenSortierer around March 2025, sources of inspiration, subsequent GPT-stack development, experiences with external AI services and authorship of the original system vision. Where dated conversations or other contemporary records are unavailable, these are identified as retrospective accounts.

**Related conceptual essay:** The separate article *Artificial Intelligence and the Expansion of Human Development Opportunities* provides a broader conceptual context. It does not establish historical events in this project and is not independent empirical confirmation of the development investigated here.

The internal archive retains original filenames, source locations and verification notes, but readers cannot inspect it directly. Some findings therefore cannot be independently checked against all original documents. This limitation informs the analysis and is described by source category in Appendix B. Academic publications used subsequently for theoretical discussion are kept separate from the historical research material.

### 2.3 Rules of interpretation

Historical configurations establish intended capabilities, not operational reliability. Conversation summaries record documented reflections, not necessarily the precise date on which an idea first emerged. Retrospective memories are not presented as independently verified chronology. Earlier architecture decisions, some described as “binding” in their own documents, remain valid only within their historical versions and do not govern current architectural decisions.

**Evidence labels used in the text:** `documented` refers to statements visible in the supplied material; `personal recollection` to retrospective statements by the author; `interpretation` to a reading derived from several observations; and `open` to a question not yet adequately supported.

### 2.4 Claim-specific source examination

Materials were selected around the documented development of the question: early configurations for specialised work, documents about collaboration and handoff, and later plans for systematic exploration and development. Each artefact was examined for **the problem it addressed**, **the work or decision it described**, and **the historical or methodological conclusions it could support**. The three development strands in Section 9.6 organise the documented material retrospectively. They were neither original coding categories nor the outcome of a formal coding study. Uncertain dates, retrospective compression and differences in the validity of document versions are not taken as proof of chronology or causation.

The analysis distinguishes the type of material, its specific documented content and the scope of any conclusion. Preserved configurations can support claims about intended functions, not their effectiveness. Concept notes can document a developed idea without showing when it first arose. Retrospective summaries and personal recollections are not treated as equivalent to independently dated primary evidence.

Selected central statements were linked to specific source passages in the internal working version; some were checked directly against their historical originals. They include role and module descriptions for early Custom GPTs, the distinction between Nova and Nadia, the Phase 1 research instruction, which explicitly excluded technical decisions and the historical Phase 2 process model. **35 entries** were checked in the scan registry: 31 regular numbers and four supplementary in-depth entries. That figure describes the registry, not the quality or confirmed completion of every scan.

Detailed file paths, section references and verification statuses are recorded in the **unpublished master version V1.2**. Appendix B of the public text describes material categories, their evidential role and accessibility limits instead. Without the archive, external readers cannot independently verify every source passage. The statement that the author originated the system vision remains an explicitly retrospective account; a later role description is not reinterpreted as independent evidence of its first conception.

The methodological designation “case study” also requires qualification. Yin (2018, preface, pp. 21–22 in the supplied edition, “A Trilogy: Case Study Research, Case Studies, and the Case(s)”) distinguishes systematic case study research from case narratives primarily intended to tell a story. The present study uses historical documents for an expressly described retrospective analysis. It does not claim that the original development project followed a predefined case-study protocol or that this paper satisfies every requirement of a complete research design in Yin's sense. The reference clarifies the present approach and its limits.

## 3. Starting Point: An Interdisciplinary Background, Not a Technical Blank Slate

The author does not hold a conventional degree in computer science, data science or AI engineering. Nevertheless, relevant technical and methodological experience existed. According to his personal account, his educational path included exploratory periods in industrial engineering with a civil-engineering emphasis (approximately two years), civil engineering (approximately two years), systems and information technology (approximately one year), and transport and mobility (approximately one year). He ultimately graduated in architecture, specialising in media design. These were changes of disciplinary focus, not separately completed degrees in each field.

During his studies he encountered Rhino 3D, Grasshopper and parametric design, robotics, and CAD and visualisation tools including Archicad, Allplan, Maya, 3ds Max, Photoshop, InDesign and Illustrator. Python was also used, with expert assistance, in a robotics project to position and move a robotic arm in space. This was a technically supervised use of Python, not the independent engineering of an industrial robot-control system.

Later experience included BIM training in modelling and management and more than two years working for Zurich's municipal administration in environmental and health protection, within the building-permits area. Reported responsibilities involved specialist digital applications, IT support and deputy product-owner tasks. Other qualifications and training include PSPO I, project management and requirements engineering courses, and professional development in areas such as digital transformation and organisational change. A precise mapping of competencies would require separate educational and employment records.

This is therefore not simply the story of “a non-technical person learning to code through AI”. The more relevant question is **how existing systems-oriented, design-related and product-oriented capabilities can be applied in a new technical domain**. Whether and how AI helped that transfer remains part of the inquiry.

## 4. From Prompting Inspiration to Designing Specialised Custom GPTs

### 4.1 Initial inspiration from prompt techniques

According to personal recollection, some early inspiration came from social media, particularly Instagram, where posts presented selected uses of ChatGPT and Claude through prompts, examples and purported “hacks”. The response was not merely to collect prompt templates. Instead, the author asked why people should repeatedly formulate individual prompts if they could build specialised Custom GPTs with reusable, predefined configurations for those purposes.

The author recalls beginning work on **ThemenSortierer** (a topic organiser) around March 2025, although that date has not been established by an original contemporary record. A dated conversation on **23 May 2025** already discusses organising existing chats through ThemenSortierer, a central topic index and reusable knowledge organisation. The concern was therefore not only better prompts, but also organising and retrieving knowledge from conversations. The subsequent development of a specialised GPT stack is retrospectively placed mainly between **June and August 2025**. Recovered conversation contexts mention Prompt Builder and Prompt Pilot as early as June 2025, though their exact creation dates remain unverified. The author also retrospectively recalls a presentation of a multi-part AI system associated with Google as a possible influence. Neither the specific product or concept nor the timing of that influence has been established.

### 4.2 Prompt Builder and Prompt Pilot

ThemenSortierer was the starting point for organising chats. With Prompt Builder and Prompt Pilot, attention increasingly shifted to designing, examining and improving specialised system instructions.

The preserved historical Custom GPT collection demonstrates a differentiated configuration approach. Prompt Builder and Prompt Pilot were more than templates for isolated chat questions. Their instructions and module documents concern the design, analysis and ongoing development of specialised Custom GPTs. Prompt Builder focused on conceiving and structuring configurations; in the author's recollection, Prompt Pilot became particularly important for drafting demanding custom system prompts.

A historical comparative note on modular agent and behavioural architecture records roles, capabilities, modules, triggers, markers, subprofiles, specialised modes, state conventions, safeguards, reset mechanisms and export logic. An early **specification of behaviour and workflows** was thus taking shape within the platform itself. The historical extent of marker control is documented, although no defensible total count of distinct markers has been established for this edition.

The two principal configurations already delineated their responsibilities. Prompt Builder described the conception, structuring and optimisation of Custom GPTs and their system prompts. Prompt Pilot described an analyst for checking, simulating and refining system prompts and agent behaviour. A related historical marker-control specification set out protective conventions addressing context overload, information loss and conflicts between simultaneously active markers. These documents establish that work on specialised workflows began early and was designed independently. They do not show that the intended safeguards consistently worked during model operation.

Text-based mechanisms of this kind do not imply that the underlying platform provided technically enforceable policies or formal state machines. A system prompt specifies intended model behaviour; it is not equivalent to an independently controlled execution architecture.

### 4.3 From specialised tools to a GPT stack

Specialisation led to several Custom GPTs for different tasks. Distinct roles enabled more differentiated work, but exposed a new limitation: the output of one assistant could not readily become a valid, fully traceable working state for another.

Even before the later Nova/Nadia vision, the author's conceptual contribution thus went beyond writing individual prompts. It involved designing roles, modules and specialised workflows within the Custom GPT platform. The later distinction between reflection and orchestration needs to be understood in that earlier design context, without projecting its fully developed form backwards onto the first GPT versions.

The emerging question was no longer simply how good an individual configuration could be, but how multiple specialised units might collaborate. Work on individual tools revealed requirements at the wider system level.

<figure class="whitepaper-illustration whitepaper-illustration--werkzeuge">
  <img src="/assets/writings/from-problem-framing-towards-technological-autonomy/wp-methodik-02-werkzeuge.webp" alt="Individual blue and gold lines and nodes connect into a shared flow." width="593" height="298" loading="lazy" decoding="async" />
  <figcaption>Conceptual illustration: From individual tools towards connected working structures.</figcaption>
</figure>

## 5. The Original Integration Problem: Handoff Without Losing Information

The author's account identifies a practical difficulty: work begun with one specialised Custom GPT should be continued immediately with another, without having to write a new handoff prompt and manually attach previous outputs as files on each occasion. The continuation should not rely on assumptions about what happened earlier; it should draw on concrete, valid working artefacts.

Three requirements can be distinguished:

**Ease of handoff:** Switching specialised functions should not require a manual reconstruction of the task each time.

**Information continuity:** Relevant decisions, artefacts, assumptions and unresolved questions must remain accessible for subsequent work.

**Verifiability of working state:** Subsequent work must distinguish documented results, outstanding issues and mere model assumptions.

A later historical concept note describes the transition as **Dialogue → Structure → Handoff**. An open conversation may be incomplete, exploratory, iterative or contradictory. A subsequent specialised process, by contrast, requires an explicit transfer of objectives, scope, constraints, relevant decisions, sources and expected results. The note documents this conceptual advance, but not an implemented technical handoff mechanism.

## 6. Exploring External Services and the Question of Resources

According to the author's recollection, alternative integrated AI services were also explored. Several smaller projects using Abacus AI offered an impression of what a more comprehensive AI working environment might provide. A second practical challenge appeared in extended, multi-stage project work. As conversations grew longer, so did the context; the author observed a substantial increase in token consumption. Towards the end of longer tasks this could consume a large share of the available credit.

This observation does not support independent quantitative claims about Abacus AI's billing at the time. The relevant issue is the practical difficulty observed: if large amounts of context are processed and billed again on later calls, multi-stage projects may become increasingly resource-intensive. Similar concerns about cost and context were subsequently encountered when using Claude. The providers' underlying technical mechanisms must not be treated as identical without verification.

A further question therefore emerged alongside handoff: **How can a reliable long-term working state be preserved without repeatedly loading the entire history into a model's context for every subtask?** This question connects with later research topics including memory, retrieval, context selection, source authority and resource management. The precise historical influence of each experience on later decisions cannot be reconstructed in full.

## 7. The Early Vision: Human Reflection and Specialised Execution

According to the project initiator's explicit retrospective clarification, the original system vision was his own. It combined a Socratic conversation partner for open-ended human problem-solving with a separate orchestration role and coordinated work by specialised AI agents. Subsequent human–AI collaboration supported critical examination, refinement of requirements, investigation of technical possibilities and development of further questions. This account of authorship is retrospective. The historical conversation summaries document the role concept as subsequently articulated, not the exact moment of its first conception.

The central idea was not automatic task completion. The system was intended first to support an open human thought process, while keeping that process separate from technical execution.

### 7.1 Nova: A Socratic thinking partner

Nova was conceived as a conversational system designed to engage the user as a collaborative thinking partner. The role was intended to contribute to brainstorming, project development and problem clarification, challenge assumptions, expose blind spots and disagree where appropriate. Socratic collaboration means more than agreement: assumptions should be questioned and alternative perspectives seriously considered. Responsibility for objectives and decisions remains with the human participant.

### 7.2 Structured handoff

Insights arising in dialogue were not intended to pass to technical execution roles merely as an unfiltered chat transcript. Conceptually, open conversation and execution are separated by the structuring of relevant findings, decisions, limitations and unresolved questions. The historical handoff note explicitly describes this necessary translation.

### 7.3 Nadia: A distinct orchestration role

Later historical summaries describe Nadia as a separate orchestrator intended to divide tasks, select specialised agents or tools, coordinate dependencies and manage handoffs. Nova and Nadia therefore serve different functions: reflection on the one hand, orchestration on the other. A summary dated 28 August 2026 expressly records these distinct roles but **does not establish August as their date of origin**. Dated conversation contexts place the conception of a local modular agent system with Nova and separate orchestration **no later than March 2026**. Conversations from **April 2026** explore the roles, workflows and technical parameters in greater depth. Which details were already fully specified must be checked against each contemporary conversation state.

These historical role descriptions are **not evidence of current technical implementation**. Frameworks discussed previously, such as OpenJarvis or Mastra, must likewise not be retrospectively cast as the origin of the vision. To the extent supported by the material, they were historical technology hypotheses.

The defining combination in this early concept was **open-ended human reflection, traceable handoff and modular specialised execution**.

<figure class="whitepaper-illustration whitepaper-illustration--uebergabe">
  <img src="/assets/writings/from-problem-framing-towards-technological-autonomy/wp-methodik-03-uebergabe.webp" alt="Layered translucent planes in blue, grey and gold with connecting lines." width="455" height="298" loading="lazy" decoding="async" />
  <figcaption>Conceptual illustration: A structured handoff between reflection and specialised execution.</figcaption>
</figure>

## 8. From System Vision to a Methodically Managed Project

Conceptual and planning work on the local agent system dates back at least to **spring 2026**. August 2026 represents a later research and updating stage, including a renewed examination of Phase 1 topics, not the beginning of the system vision or project planning. Conceptual and technical questions were already being explored in April 2026. The precise sequence of early partial decisions remains uncertain where only later summaries are available.

The documented development is presented below according to methodological connections. This should not be mistaken for an uninterrupted, independently established chronological or causal sequence. Some ideas may have arisen in parallel, changed subsequently or been grouped together only in retrospective summaries. One example concerns “sovereignty”: a historical inventory of the local agent-system concept distinguishes an initially strongly offline-oriented vision from subsequent consideration of explicitly granted network permissions. It records a described change in the concept, not a current architectural decision.

### 8.1 Clarifying the problem and objectives before implementation

Rather than proceeding directly to technical construction, the project was initially divided into different stages of work. The system and project conception developed in spring 2026 was already substantive methodological work in its own right; later updated research was not its starting point. Historical structure documents record seven numbered work steps and an additional alignment step: extraction of earlier thinking; alignment (Phase 1.5); cross-phase consolidation; drafting the system structure; reviewing that structure; recording decisions made at the time; a further consistency review; and prioritising implementation. The labels “Phase 1” through “Phase 7” in those early documents refer to that historical sequence. They must not be confused with the three later overarching project phases or the updated Phase 1 scan. The documents describe the work products associated with each step; without additional dated original records, completion of each individual step by April 2026 cannot be established. Some early documents contain detailed components and decisions then labelled “binding”. For this study their methodological progression, identified trade-offs and iterative work are more relevant than their technical prescriptions, which carry no current project authority.

Connections can be drawn with project management, product management and requirements engineering: understanding the initial situation and objectives; clarifying requirements and boundaries; investigating options; making decisions traceable; and only then preparing implementation in a controlled way. These disciplines serve distinct functions. The historical process is not presented as evidence that every formal standard procedure was applied in full.

### 8.2 Phase 1: Broad exploration instead of premature technology selection

The final Phase 1 instruction calls for a source-based evidence inventory covering relevant research, methods, frameworks, models, risks, benchmarks and possible architectures. Research, classification, evidence review and coverage assessment are explicitly included. Technical decisions are explicitly excluded, as documented in the final Phase 1 instruction.

The preserved active scan registry contains **35 entries**, consisting of 31 regularly numbered assignments and four supplementary in-depth entries, across various technical and disciplinary topics. This number alone establishes neither comprehensive coverage nor the validity of every individual finding. The registry does show an intention to explore the solution space broadly before selecting specific components.

This separation matters especially in rapidly changing AI technology. A completed scan can remain part of the historical evidence while particular products, model versions and performance figures require later revalidation. The method helps separate relatively stable problem categories from time-dependent technical candidates.

### 8.3 Phase 2: Requirements before architecture and the technology stack

A documented process model dated 2 September 2026 describes a more differentiated Phase 2. Based on Phase 1 evidence and the historical project baseline, the model **envisaged** functional discovery, a requirements and constraints baseline, preservation and traceability checks, and subsequent translation into architecture, candidate assessment, technology evaluation and MVP definition. These activities were provisions of the process model, not automatically completed tasks.

The planned sequence is itself revealing. The system vision was not the only thing becoming more complex: the **working method used to manage that complexity** was also developing. Design work took place at two levels, concerning both the intended agent infrastructure and the approach to developing it. The earliest modular Custom GPT configurations already document methodological work. The 35 scans mark a later, more formalised stage of research, not its beginning. Separating exploration from technical commitment, and subsequently differentiating discovery, requirements, architectural translation and technology evaluation, documents an evolution of the **process framework**. It does not establish full execution or technical effectiveness of every activity described.

This substantive work should not be represented as a completed technical implementation. Specific use of sources and any publication rights relating to publicly cited details would need to be checked separately.

Requirements engineering offers a useful external comparison. Nuseibeh and Easterbrook (2000, Sections 1–2 and 9) describe the elicitation, modelling, analysis, communication, agreement and evolution of requirements as connected activities. The documented shift from a concrete handoff problem to questions of information continuity, working states and the boundaries of technical decisions can be understood in that methodological context. This resemblance concerns problem clarification and requirements work; it does not demonstrate full application of a particular requirements engineering method or completion of all activities envisaged in the Phase 2 model.

<figure class="whitepaper-illustration whitepaper-illustration--entwicklungsweg">
  <img src="/assets/writings/from-problem-framing-towards-technological-autonomy/wp-methodik-04-entwicklungsweg.webp" alt="An abstract blue-and-gold data landscape with connected ridges and points." width="556" height="333" loading="lazy" decoding="async" />
  <figcaption>Conceptual illustration: The progressive development of a structured working method.</figcaption>
</figure>

### 8.4 Phase 3: Technical implementation as a planned stage of verification

The documents envisage Phase 3 as a later stage of implementation, integration and testing. The historical material currently supplied does not permit a conclusive assessment of implemented functions, security guarantees or MVP acceptance status. Those results belong in a separate technical whitepaper based on current authoritative implementation and verification reports.



## 9. Analytical Discussion: What This Case Allows Us to Examine

### 9.1 Problem-driven rather than tool-driven development

The reconstructed process began with a practical task. Working on it progressively exposed limitations in the available tools. The question “Which model or framework should we use?” was not the point of departure. Instead, specialised workflows were designed first, their lack of integration subsequently became apparent, and different technical possibilities were explored only thereafter. This problem-oriented pattern is visible in the historical record. Whether it was more effective than other approaches has not been investigated.

### 9.2 Tool-enabled capability and independently acquired competence are different

The author's separate essay on expanding human development opportunities distinguishes personal competence, the capability provided by tools and the possible emergence of new interests. The distinction applies directly here. Pre-existing systems thinking may influence how a problem is defined. AI may make technical investigation easier. Repeated work in new areas may foster additional knowledge or interests. But completing a task successfully with AI does not automatically establish independent skill development. Such a claim would require suitable comparison tasks, evidence of learning or a traceable longitudinal reflection.

### 9.3 Context continuity is not the repetition of an entire context

The historical experiences raise three distinct quality questions. Is relevant information retained over time? Is the right information selected for a particular task? Can its validity, provenance and decision authority be identified? A fourth question concerns cost: how much context is actually needed for a given model call? These questions require separate assessment. Extensive memory guarantees neither effective retrieval, accurate context selection nor low operating costs.

### 9.4 Human control is more than behaviour requested in a prompt

Socratic dialogue and separate orchestration may usefully structure work. They do not replace technical permissions, verification procedures or human approvals. A system intended to expand human agency must distinguish a proposed decision from an authorised action and a genuinely verified result. The historical vision articulated such control requirements; their subsequent enforcement remains to be demonstrated separately.

The human–AI interaction guidelines of Amershi et al. (2019, Table 1, Guidelines G9 and G15) provide another perspective, emphasising efficient correction and appropriately differentiated user feedback in AI-enabled applications. They offer a point of comparison with the historical intention to preserve human influence. However, the conceptual separation of reflection and orchestration neither proves that correction mechanisms were implemented nor satisfies the technical requirements of permissions, security and governance.

### 9.5 Development of a problem and development of the person

The documented history suggests a possible feedback loop. Designing Custom GPTs led to questions about cooperation between them; platform experiments exposed further constraints; the ensuing exploration opened up additional technical questions. What is documented first is an **expansion of the problem space being addressed**. Whether stable new personal competencies, interests or autonomous professional capabilities emerged at the same time is a separate empirical question. The distinction prevents a traceable development path from being mistaken for proof of a general effect.

### 9.6 Methodological synthesis

#### Prior experience and methodical design

For examining the transfer of capabilities, **specific correspondences between earlier ways of working and documented project activities** are more informative than a general appeal to interdisciplinary experience. Configuring specialised roles, modules and workflows resembles model-based and parametric structural thinking. That similarity does not prove that particular decisions were caused by the author's earlier education. Identifying unreliable handoff as a practical problem and investigating possible solutions resembles product-oriented problem framing. Explicitly separating the problem, requirements and technical candidates is a central concern of requirements engineering. Phase planning, the scan registry and the separation between research and decision-making demonstrate project-methodological structuring, although planning does not establish completion of every intended step. Attention to context, working state, evidential limits and handoff also reflects an information-architecture perspective.

Early system instructions, role models and workflows can at the same time be understood as **conceptual design artefacts**. In design science research, Hevner et al. (2004, “Design as an Artifact” and Guideline 3, “Design Evaluation”) distinguish constructs, models, methods and instantiations, while treating evaluation as a separate requirement. This comparison clarifies the design character of the early GPT work; it does not retroactively make the project a design science research study or classify its artefacts as independently evaluated.

#### AI assistance and human responsibility

The role played by generative AI was not identical at every stage. In the reconstructed collaboration, it appears **as a dialogue and reflection partner** when examining open questions, **as an aid to structuring** roles, requirements and assignments, and **as support for technical knowledge exploration** when examining concepts and alternatives. Preserved configuration and project artefacts also show AI-assisted **drafting of texts and working artefacts**. These distinctions describe observed or retrospectively reported uses. They do not assume either a reliably effective Socratic function or the factual correctness of AI outputs. For each activity, it remains necessary to distinguish contemporary documentation from later recollection.

This distribution of tasks has points of contact with the concept of *hybrid intelligence*. Dellermann et al. (2019, Sections 1–2) discuss collaboration between complementary human and machine capabilities. In the case examined here, originating the problem and responsibility for decisions remain with the project initiator, while generative AI performed various supporting functions. This is an analytical comparison, not evidence that the division of labour improved performance or that every interaction can be established from a contemporary transcript.

#### Bringing the three development strands together

Three connected developments can be distinguished in the documented record. First, the problem space changed: independently designing specialised Custom GPTs revealed the difficulty of reliably transferring work between them, prompting broader questions about information continuity and coordinated execution. Second, existing design, technical and methodological experience was brought to bear on a new domain, while generative AI helped make additional specialist information and approaches accessible. Third, the development process itself became progressively more formalised, moving from early configuration and concept work through broad exploration towards a distinction between requirements, architecture and later implementation.

These strands interact in the reconstructed case. Early design of specialised assistants made coordination limits a problem in their own right. The broadened problem increased the need for explicit planning, requirements boundaries and evidential traceability. Formalisation, in turn, provided categories with which to examine newly emerging technical questions. This connection is an **interpretation of documented events**, not an uninterrupted causal account. The strands were not necessarily strictly sequential, nor has their mutual causation been demonstrated. Sources show concepts, working steps and later process descriptions. They do not allow an isolated measurement of generative AI's contribution to the changes. The methodological value lies in showing how human problem framing, existing methodological competence, AI-assisted knowledge exploration and the stepwise structuring of a project relate to one another in a particular case. Whether elements of the approach transfer to other settings requires further justification.

## 10. Limitations and Alternative Explanations

**Retrospective bias:** Some early events are described from today's perspective. The reconstruction may consequently appear more linear than the development actually was.

**Gaps in versions and sources:** The historical Custom GPT collection preserves substantial content but does not necessarily include complete timestamps for every early revision. Some later summaries may reorganise earlier decisions.

**Selection bias:** The surviving artefacts form the principal record. Approaches that were abandoned, never documented or explored outside these materials may remain invisible.

**No comparison group:** The single case cannot establish how the same process would have unfolded without AI, with other tools or when carried out by a professionally trained developer.

**Multiple influences:** Generative AI was not the only possible influence. Education, work experience, available time, further training, personal motivation and existing digital tools may also have shaped the process.

**Incomplete measurement of effectiveness:** Extensive project documentation demonstrates methodological work but does not automatically establish technical correctness, productive efficiency or lasting competence development.

**No implemented security guarantee:** Historically specified local execution, sandboxing, approval processes or verification agents must not be presented as technically enforced controls.

## 11. Provisional Findings and Further Evidence Needed

The available sources show how systematic design of specialised Custom GPTs increasingly raised questions about handoff and information continuity. They also document a more differentiated research and development approach for later work.

Already documented findings can be distinguished: the early differentiated GPT configurations; later descriptions of separate reflection and orchestration roles; the explicit decision-free intent of Phase 1 research; and the differentiated Phase 2 approach. The claim that the original vision came from the project initiator is further supported by his explicit historical clarification, but not by an independently dated record of first conception. Stronger conclusions concerning learning, efficiency or technical quality remain open.

Outstanding issues include the exact creation dates of ThemenSortierer, Prompt Builder and Prompt Pilot, and the full sequence of early GPT versions and platform comparisons; identifying and dating the retrospectively mentioned influence associated with Google; the original project-start plan; verification of specific cost observations; distinguishing historical role specifications from later architectural decisions; documenting the development of independent technical capabilities; and establishing the implemented and validated status of the MVP.

Further historical examination would particularly benefit from dated early system-prompt versions, handoff examples, original implementation plans, selected scan and audit trails, and a retrospective competence matrix. These are potential ways to strengthen the reconstruction, not all mandatory prerequisites for publishing this methodological case study. Later documented MVP assessments belong primarily to a **separate technical follow-up study**. Making every underlying record public is neither necessary nor necessarily appropriate.

## 12. Conclusion

The case permits a qualified response to the guiding question. **Existing interdisciplinary and methodological competencies can be identified in documented steps of independently framing a problem, conceiving a system and organising a project; generative AI was used to support reflection, structuring and access to knowledge.** The documents show this development process, but do not allow generative AI's independent contribution to be measured in isolation.

The reconstruction reveals a methodological development that begins well before code generation: independently designing specialised AI workflows, recognising integration constraints and progressively formalising the examination of a technical solution space. This conclusion concerns the case at hand. It does not establish a general efficiency gain or causally demonstrate increased competence. Someone with an interdisciplinary background and experience in project, product and requirements work can investigate a concrete limitation methodically, structure their working tools, explore new technical questions and prepare a more extensive development project. Generative AI can form part of that process without displacing professional responsibility or the need for independent verification.

The path from Prompt Builder and Prompt Pilot, through the specialised GPT stack, to the problem of reliable handoff illustrates how a limited application can open up new questions at the system level. The historical distinction between Socratic reflection, structured handoff and orchestrated specialist execution gives the concept its distinctive character. The later separation of research, requirements, architecture and implementation also illustrates how the working method itself evolved.

**The broader research question remains open:** It is not whether AI can develop complex systems by itself, but under which conditions people can use AI to carry existing capabilities into new technical fields, expand their understanding and remain independently accountable for the results.

The reconstructed development provides a concrete case through which this question can be explored further. Whether the intended infrastructure meets its original requirements and what technical characteristics it actually possesses can only be determined through subsequent implementation and verification.

---

## Appendix A. Chronological Reconstruction and Evidence Status

| Period / stage | Subject | Evidence status |
|---|---|---|
| Approximately March 2025 | Presumed beginning of work on ThemenSortierer and organising chat content | Author's personal recollection; initial origin not dated |
| 23 May 2025 | Dated discussion of ThemenSortierer, topic indexing and reusable chat organisation | Contemporary dated conversation extract; establishes discussion, not first creation |
| June 2025 | Prompt Builder and Prompt Pilot mentioned in historical conversation contexts; GPT-stack conception developing | Retrospectively recovered conversation contexts; exact creation dates open |
| June–August 2025 | Further development of specialised Custom GPTs and a GPT stack | Author's retrospective dating; dates of individual versions remain open |
| Early configuration stage | Prompt Builder / Prompt Pilot, detailed system instructions and marker structures | Historical archive and curated concept analysis; dates of individual versions open |
| Later GPT-stack use | Difficult handoffs and manual transfer of results | Personal recollection and historical handoff concept notes |
| Date unresolved | Recalled but unidentified influence associated with Google; trial use of Abacus AI; context and credit-consumption problems | Personal recollection; external verification and dating outstanding |
| No later than March 2026 | Documented conception of a local modular agent system with reflection and orchestration roles | Recovered dated conversation context; not a complete reconstruction of all early details |
| April 2026 | Further development of local system and project planning, including roles, technical parameters and security questions | Recovered dated conversation contexts; individual states require separate examination |
| August 2026 | Concept inventory, handoff and memory notes as later records and elaborations | Dated historical documents; not the origin of the system vision |
| August 2026 | Updated or repeated Phase 1 research stage with a registry of 35 scan entries | Project instruction and registry; later research stage, not the start of conceptual work |
| 28 August 2026 | Later project summary of the already developed Nova/Nadia distinction and movement towards requirements discovery | Dated summary; documents the state at that time, not first conception |
| 2 September 2026 | More differentiated Phase 2 process model | Dated process framework |
| Subsequent stages | MVP implementation and verification evidence | Outside the current source package |

## Appendix B. Research Material and Accessibility

The historical case study is based predominantly on **internal project documents that are not publicly accessible**. The categories below identify the materials underlying the account. These are documentary research sources, not a bibliography of independent academic publications.

| Material category | Content and evidential function | Accessibility and evidential limit |
|---|---|---|
| Early Custom GPT configurations | Role profiles, system instructions, module and marker rules for Prompt Builder, Prompt Pilot and other specialised assistants; evidence of early design intentions | Archived internally, not public; no proof of effectiveness |
| Early system designs and handoff concepts | Ideas for collaboration between assistants, structured working-state handoff, and Nova and Nadia; evidence of documented conceptual states | Archived internally, not public; dates of initial conception partly unresolved |
| Historical project and research documents | Project phases, explicitly exploratory Phase 1 work that explicitly excluded technical decisions, registry with 35 scan entries and Phase 2 process model; evidence of methodological planning | Archived internally, not public; plans and registry contents must be distinguished from actual execution |
| Conversation summaries and concept inventories | Retrospective consolidation of development stages and changing understanding of the problem | Archived internally, not public; not independent evidence of first conception for every historical event |
| Personal historical accounts | Education and career, initial inspiration for Custom GPT work, experiences of AI services and authorship of the early vision | Retrospective accounts; independent dated confirmation is not available for every point |
| Separate conceptual essay | Wider discussion of AI and human development opportunities | Independent text, but not empirical evidence of the project events discussed here |

### B.1 Scope of the documentary evidence

The internal master version documents the connection between historical claims and source materials in a claim-specific verification matrix. For the aspects central to this case, the implications are as follows:

- Preserved **Prompt Builder** and **Prompt Pilot** configurations establish that roles, modules and processes had already been designed in considerable detail at an early stage. They prove neither technical reliability nor practical superiority.
- **Handoff concepts** and the documented distinction between **Nova** and **Nadia** establish conceptual work on open-ended human reflection, verifiable transfer and specialised execution. They establish neither a completed implementation nor the first date of the vision.
- The historical **Phase 1 instruction** documents an intention to keep research separate from technical decisions. The **scan registry** records 35 entries, four of them supplementary in-depth investigations. Neither alone establishes the research's comprehensive quality.
- The **Phase 2 process model** records the intended distinction between discovery, requirements and subsequent technical decisions. It does not follow that all later stages had already been carried out.
- Attribution of **original authorship** rests on the project initiator's explicit retrospective account. Later conversation summaries document the role concept but cannot replace independent evidence of its initial conception.

Individual internal source references are not reproduced in full, to preserve readability. Their non-public status limits external verification and is not concealed through artificial evidence identifiers or purely formal citations. More extensive independent checking of particular statements would require making the relevant primary passages separately accessible.

## Appendix C. Limits of the Public Edition

This publication recounts the documented origins and methodological history of the project. It provides **no evidence** that a complete local agent system has been implemented, operated securely or evaluated for effectiveness. Earlier historical architecture decisions are not presented as current technical commitments.

The author examines his own project. The resulting potential for retrospective bias must be taken into account. Details of educational and professional stages, and of some early chronological reference points, rely partly on retrospective accounts. Statements about external AI platforms report observations of use and should not be read as independently confirmed technical claims about their internal billing or context-processing mechanisms.

Before actual publication, a final factual check of personal and historical details and editorial approval are still required. The internal master version V1.2, with its detailed source matrix, is retained separately.

## Academic References

The following publications provide **subsequent methodological and theoretical context**. They are not part of the internal historical research material in Appendix B and are not represented as the project's original bases for decision-making.

- Amershi, S., Weld, D., Vorvoreanu, M., Fourney, A., Nushi, B., Collisson, P., Suh, J., Iqbal, S., Bennett, P. N., Inkpen, K., Teevan, J., Kikin-Gil, R., & Horvitz, E. (2019). *Guidelines for Human-AI Interaction*. In *Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems* (Paper 3, pp. 1–13). ACM. https://doi.org/10.1145/3290605.3300233
- Dellermann, D., Ebel, P., Söllner, M., & Leimeister, J. M. (2019). *Hybrid Intelligence*. *Business & Information Systems Engineering, 61*, 637–643. https://doi.org/10.1007/s12599-019-00595-2
- Hevner, A. R., March, S. T., Park, J., & Ram, S. (2004). *Design Science in Information Systems Research*. *MIS Quarterly, 28*(1), 75–105. https://aisel.aisnet.org/misq/vol28/iss1/6/
- Nuseibeh, B., & Easterbrook, S. (2000). *Requirements Engineering: A Roadmap*. In *Proceedings of the Conference on the Future of Software Engineering* (pp. 35–46). ACM. https://doi.org/10.1145/336512.336523
- Yin, R. K. (2018). *Case Study Research and Applications: Design and Methods* (6th ed.). SAGE Publications. ISBN 978-1-5063-3616-9.
