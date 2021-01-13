import React from 'react';

type TabPanelProps = {
  children?: React.ReactNode;
  index: any;
  value: any;
};

export default function TabPanel({ children, index, value }: TabPanelProps) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
}
