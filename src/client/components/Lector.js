// @codepen
import React, { Component } from 'react';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';

export class PanelLector extends Component<
  {},
  {
    showPanel: boolean;
  }
> {  
  constructor(props: {}) {
    super(props);
    this.state = {
      showPanel: false
    };
  }

   render=() : void =>{
    return (
      <div>
        <Panel
          isOpen={this.state.showPanel}
          type={PanelType.medium}
          onDismiss={this._onClosePanel}
          isLightDismiss={true}
          headerText="Panel - Small, right-aligned, fixed, with footer"
          closeButtonAriaLabel="Close"
          onRenderFooterContent={this._onRenderFooterContent}
        >
          <ChoiceGroup
            options={[
              {
                key: 'A',
                text: 'Option A'
              },
              {
                key: 'B',
                text: 'Option B',
                checked: true
              },
              {
                key: 'C',
                text: 'Option C',
                disabled: true
              },
              {
                key: 'D',
                text: 'Option D',
                checked: true,
                disabled: true
              }
            ]}
            label="Pick one"
            required={true}
          />
        </Panel>
      </div>
    );
  }

   _onClosePanel =() : void =>{
    this.setState({ showPanel: false });
  };

   _onRenderFooterContent =(): void =>{
    return (
      <div>
        <PrimaryButton onClick={this._onClosePanel} style={{ marginRight: '8px' }}>
          Save
        </PrimaryButton>
        <DefaultButton onClick={this._onClosePanel}>Cancel</DefaultButton>
      </div>
    );
  };

  _onShowPanel = (): void => {
  console.log('show panel');
  this.setState({ showPanel: true });
  };
}