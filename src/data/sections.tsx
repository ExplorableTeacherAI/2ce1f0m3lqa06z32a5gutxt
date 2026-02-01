import { type ReactElement } from "react";
import { Section } from "@/components/templates";
import { FullWidthLayout } from "@/components/layouts";
import { InteractiveParagraph } from "@/components/molecules/InteractiveParagraph";
import { InlineStepper } from "@/components/atoms/InlineStepper";
import { InteractiveHighlightProvider, InteractiveText } from "@/components/atoms/InteractiveHighlight";
import { EditableText } from "@/components/editing/EditableText";

// Initialize variables from this file's variable definitions
import { useVariableStore } from "@/stores";
import { getDefaultValues } from "./variables";
useVariableStore.getState().initialize(getDefaultValues());

/**
 * ------------------------------------------------------------------
 * SECTION CONFIGURATION
 * ------------------------------------------------------------------
 * This file is the entry point for your lesson content.
 * 
 * INSTRUCTIONS:
 * 1. Create your content using the <Section> component.
 * 2. Use Layout components to organize your sections.
 * 3. Add your sections to the `sections` array below.
 * 
 * ------------------------------------------------------------------
 * CROSS-SECTION VARIABLES
 * ------------------------------------------------------------------
 * Variables can be shared across sections using the global store.
 * 
 * DEFINE VARIABLES: src/data/variables.ts
 * 
 * USAGE IN SECTIONS:
 * 
 * // Reading a value (auto-updates when changed):
 * import { useVar } from '@/stores';
 * const amplitude = useVar('amplitude', 1);
 * 
 * // Setting a value:
 * import { useSetVar } from '@/stores';
 * const setVar = useSetVar();
 * setVar('amplitude', 2.5);
 * 
 * ------------------------------------------------------------------
 * AVAILABLE LAYOUTS
 * ------------------------------------------------------------------
 * 
 * 1. FullWidthLayout
 *    - Best for: Title headers, introductory text, broad visualizations.
 *    - Usage:
 *      <FullWidthLayout maxWidth="xl">
 *          <Section id="intro">...</Section>
 *      </FullWidthLayout>
 * 
 * 2. SplitLayout
 *    - Best for: Side-by-side content (e.g., Text + Visualization).
 *    - Usage:
 *      <SplitLayout ratio="1:1" gap="lg">
 *          <Section id="left">...</Section>
 *          <Section id="right">...</Section>
 *      </SplitLayout>
 * 
 * 3. GridLayout
 *    - Best for: Multiple equal-sized items (cards, galleries).
 *    - Usage:
 *      <GridLayout columns={3} gap="md">
 *          <Section id="item-1">...</Section>
 *          <Section id="item-2">...</Section>
 *          <Section id="item-3">...</Section>
 *      </GridLayout>
 * 
 * 4. SidebarLayout
 *    - Best for: Main content with a sticky sidebar (glossary, controls).
 *    - Usage:
 *      <SidebarLayout sidebarPosition="left" sidebarWidth="medium">
 *          <Sidebar><Section id="sidebar">...</Section></Sidebar>
 *          <Main><Section id="main">...</Section></Main>
 *      </SidebarLayout>
 * 
 * EXAMPLES:
 * See `src/data/exampleSections.tsx` for comprehensive examples.
 * 
 * NOTE: If you are seeing examples in the browser instead of this content,
 * check your .env file and set VITE_SHOW_EXAMPLES=false.
 */

export const sections: ReactElement[] = [
    <FullWidthLayout key="test-section" maxWidth="xl">
        <Section id="test-paragraph">
            <InteractiveHighlightProvider styleMap={{
                'hexagon': { color: '#f59e0b', underline: 'dotted' },
                'fibonacci': { color: '#10b981', underline: 'dotted' },
                'pi': { color: '#8b5cf6', underline: 'dotted' },
                'spiral': { color: '#ec4899', underline: 'dotted' },
                'circle': { color: '#3b82f6', underline: 'dotted' },
            }}>
                <EditableText sectionId="test-paragraph" as="div">
                    <InteractiveParagraph>
                        Mathematics is the language of the universe. From the{' '}
                        <InteractiveText id="spiral">spirals of galaxies</InteractiveText>{' '}
                        to the patterns in a sunflower, numbers and shapes reveal the hidden order in nature. Let's explore these fascinating connections together!
                    </InteractiveParagraph>
                </EditableText>

                <EditableText sectionId="test-paragraph" as="div">
                    <InteractiveParagraph>
                        Have you ever wondered why honeybees build{' '}
                        <InteractiveText id="hexagon">hexagonal cells</InteractiveText>?
                        A hexagon has{' '}
                        <InlineStepper initialValue={6} min={3} max={12} color="#f59e0b" />{' '}
                        sides, making it the most efficient shape for storing honey — they use the least amount of wax while maximizing space. Nature discovered this optimization millions of years before humans!
                    </InteractiveParagraph>
                </EditableText>

                <EditableText sectionId="test-paragraph" as="div">
                    <InteractiveParagraph>
                        The <InteractiveText id="fibonacci">Fibonacci sequence</InteractiveText>{' '}
                        everywhere in nature: the arrangement of leaves on a stem, the{' '}
                        <InteractiveText id="spiral">spiral of a nautilus shell</InteractiveText>,
                        and even the branching of trees. If you start with{' '}
                        <InlineStepper initialValue={1} min={1} max={10} color="#10b981" />{' '}
                        and{' '}
                        <InlineStepper initialValue={1} min={1} max={10} color="#10b981" />,
                        each number is the sum of the two before it: 1, 1, 2, 3, 5, 8, 13, 21...
                    </InteractiveParagraph>
                </EditableText>

                <EditableText sectionId="test-paragraph" as="div">
                    <InteractiveParagraph>
                        <InteractiveText id="pi">Pi (π)</InteractiveText>{' '}
                        is perhaps the most famous number in mathematics. This  , non-repeating decimal connects a{' '}
                        <InteractiveText id="circle">circle's circumference</InteractiveText>{' '}
                        to its diameter. If a circle has a diameter of{' '}
                        <InlineStepper initialValue={10} min={1} max={100} color="#8b5cf6" />{' '}
                        units, its is  {' '}
                        <InlineStepper initialValue={31} min={3} max={314} color="#3b82f6" />{' '}
                        units. Ancient civilizations approximated pi thousands of years ago, and mathematicians continue to calculate more digits today — currently over 100 trillion!
                    </InteractiveParagraph>
                </EditableText>
            </InteractiveHighlightProvider>
        </Section>
    </FullWidthLayout>
];
