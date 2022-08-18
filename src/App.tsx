import React, { useMemo, useState } from "react";

import {
  MentionAtomExtension,
  PlaceholderExtension,
} from "remirror/extensions";
import {
  EditorComponent,
  MentionAtomPopupComponent,
  Remirror,
  ThemeProvider,
  useRemirror,
} from "@remirror/react";
import { AllStyledComponent } from "@remirror/styles/emotion";

//TODO: This pattern needed to change to support all cases. Currently it is supporting only space
const pattern = /\S/;

const extensions = () => [
  new MentionAtomExtension({
    extraAttributes: { type: "user" },
    matchers: [
      {
        name: "tag",
        char: pattern,
        appendText: "",
        matchOffset: 0,
        mentionClassName: "mention",
        mentionTag: "span",
      },
    ],
  }),
  new PlaceholderExtension({ placeholder: `Mention a Formula    ` }),
];

const ALL_USERS = [
  { id: "max", label: "MAX" },
  { id: "min", label: "MIN" },
  { id: "round", label: "ROUND" },
  { id: "avg", label: "AVG" },
  { id: "not", label: "NOT" },
];

const App = () => {
  const [search, setSearch] = useState("");
  const { manager, state } = useRemirror({ extensions });
  const items = useMemo(() => {
    return ALL_USERS.filter((user) =>
      user.label.toLowerCase().includes(search)
    ).sort();
  }, [search]);

  return (
    <div className="editor-container">
      <AllStyledComponent>
        <ThemeProvider>
          <Remirror manager={manager} initialContent={state} autoFocus>
            <MentionAtomPopupComponent
              onChange={(state) =>
                setSearch(state?.query.full.toLowerCase() ?? "")
              }
              items={items}
            />
            <EditorComponent />
          </Remirror>
        </ThemeProvider>
      </AllStyledComponent>
    </div>
  );
};

export default App;
