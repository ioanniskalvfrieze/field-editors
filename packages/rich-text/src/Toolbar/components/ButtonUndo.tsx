import React from 'react';

import { Icon } from '@contentful/f36-components';

import { useContentfulEditor } from '../../ContentfulEditorProvider';
import { ToolbarButton } from '../../plugins/shared/ToolbarButton';

export const ButtonUndo = () => {
  const editor = useContentfulEditor();

  return (
    <ToolbarButton
      title="Undo"
      testId="undo-toolbar-button"
      onClick={editor.undo}
      isActive={false}
      isDisabled={editor.history.undos.length === 0}
    >
      <Icon variant="secondary">
        <path d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" />
      </Icon>
    </ToolbarButton>
  );
};
