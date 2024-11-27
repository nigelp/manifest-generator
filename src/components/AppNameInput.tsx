import React from 'react';

interface AppNameInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function AppNameInput({ value, onChange }: AppNameInputProps) {
  return (
    <div className="mb-6">
      <label htmlFor="appName" className="block text-sm font-medium text-gray-700 mb-2">
        App Name
      </label>
      <input
        type="text"
        id="appName"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="My Progressive Web App"
        required
      />
    </div>
  );
}