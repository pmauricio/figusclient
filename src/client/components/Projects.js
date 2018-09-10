import * as React from 'react';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Dropdown, IDropdown, DropdownMenuItemType, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { BaseComponent, createRef } from 'office-ui-fabric-react/lib/Utilities';
import { Shimmer, ShimmerElementType as ElemType } from 'office-ui-fabric-react/lib/Shimmer';
export class ProjectsDropDown extends BaseComponent<
  {},
  {
    selectedItem?: { key: string | number | undefined };
    selectedItems: string[];
    projects: [];
    isLoading:boolean;
   
  }
> {
  

  constructor(props: {}) {
    super(props);
    this.state = {
      selectedItem: undefined,
      selectedItems: [],
      projects: [{key:'a',text:'0'}],
      isLoading:true
    };
  }
  componentDidMount() {
    this.setState({isLoading: true});

    fetch('http://localhost:8080/projects')
      .then(response => response.json())
      .then(data => this.setState({projects: data, isLoading: false}));
  }

   render() {
    const { selectedItem, selectedItems } = this.state;
    if(this.state.isLoading)
        return  <Shimmer />;
    else
    return (
      <div className="docs-DropdownExample">
        <Dropdown
      
          placeHolder="Select an Option"         
          id="Basicdrop1"
          ariaLabel="Basic dropdown example"
          options={this.state.projects.map(function(obj){ 
            var rObj = {};
            rObj.text = obj.name;
            rObj.key = obj.id;
            return rObj;
         })}
    
          componentRef={this._basicDropdown}
        />
      
      </div>
    );
  }

   changeState = (item: IDropdownOption): void => {
    console.log('here is the things updating...' + item.key + ' ' + item.text + ' ' + item.selected);
    this.setState({ selectedItem: item });
  };

  

   copyArray = (array: any[]): any[] => {
    const newArray: any[] = [];
    for (let i = 0; i < array.length; i++) {
      newArray[i] = array[i];
    }
    return newArray;
  };

  }
