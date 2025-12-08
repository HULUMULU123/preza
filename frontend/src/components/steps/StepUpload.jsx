import React, { useState } from 'react';
import PropTypes from 'prop-types';

const recentDocuments = [
  {
    id: 'statement_november.pdf',
    type: 'PDF',
    uploadedAt: '12.11.2024, 09:12',
    status: 'обработано',
  },
  {
    id: 'counterparty_registry.csv',
    type: 'CSV',
    uploadedAt: '11.11.2024, 18:40',
    status: 'в очереди',
  },
  {
    id: 'statement_october.xlsx',
    type: 'XLSX',
    uploadedAt: '05.11.2024, 10:28',
    status: 'архив',
  },
];

const statusTone = {
  обработано: 'status-positive',
  'в очереди': 'status-progress',
  архив: 'status-muted',
};

export default function StepUpload({ onStartAnalysis, disabled }) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (event) => {
    event.preventDefault();
    if (!disabled) {
      setIsDragging(true);
    }
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const uploadZoneClassName = ['upload-zone'];
  if (isDragging) {
    uploadZoneClassName.push('upload-zone--dragging');
  }

  return (
    <div className="page-card">
      <h3 className="section-title">Загрузка документа</h3>
      <p className="helper-text">
        Вставьте ваш файл, а остальное оставьте нам — мультиагент сам поймет структуру
        выписки и подготовит следующий шаг.
      </p>
      <div
        className={uploadZoneClassName.join(' ')}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input id="statement-upload" type="file" className="upload-zone__input" multiple />
        <label htmlFor="statement-upload" className="upload-zone__drop">
          <span className="upload-zone__icon" aria-hidden>
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="12" width="48" height="32" rx="12" stroke="currentColor" strokeWidth="2" opacity="0.35" />
              <path
                d="M28 18V36"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M22 24L28 18L34 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <strong>Перетащите выписку сюда</strong>
          <span className="upload-zone__hint">или выберите документ на устройстве</span>
        </label>
        <div className="upload-actions">
          <label htmlFor="statement-upload" className="secondary-button upload-zone__trigger">
            Выбрать файл
          </label>
          <button className="primary-button" type="button" onClick={onStartAnalysis} disabled={disabled}>
            Запустить анализ
          </button>
        </div>
      </div>
      <div className="table-stack">
        <div className="table-header">
          <h4>Последние документы</h4>
          <span>Всё, что вы загружали за последние дни</span>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Документ</th>
              <th>Тип</th>
              <th>Загружено</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            {recentDocuments.map((doc) => (
              <tr key={doc.id}>
                <td>{doc.id}</td>
                <td>{doc.type}</td>
                <td>{doc.uploadedAt}</td>
                <td>
                  <span className={`status-chip ${statusTone[doc.status]}`}>{doc.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

StepUpload.propTypes = {
  onStartAnalysis: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

StepUpload.defaultProps = {
  disabled: false,
};
