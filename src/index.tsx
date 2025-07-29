import React from 'react';
import {parse, setOptions} from 'marked';
import { Text } from 'ink';
import TerminalRenderer, { TerminalRendererOptions } from 'marked-terminal';

export type Props = TerminalRendererOptions & {
  children: string;
};

export default function Markdown({ children, ...options }: Props) {
  const renderer = new TerminalRenderer(options);
  const parsed = parse(children, { renderer });
  return <Text>{parsed.trim()}</Text>;
}
