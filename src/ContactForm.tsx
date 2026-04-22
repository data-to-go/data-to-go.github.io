import { useState, FormEvent, ChangeEvent } from 'react';

// Get your free key at https://web3forms.com
const ACCESS_KEY = 'c31d12bd-45f1-4e9f-80b9-0b1105872d72';

type Status = 'idle' | 'submitting' | 'success' | 'error';
type Fields = { name: string; email: string; company: string; message: string };

const INITIAL: Fields = { name: '', email: '', company: '', message: '' };

const ContactForm = () => {
  const [fields, setFields] = useState<Fields>(INITIAL);
  const [status, setStatus] = useState<Status>('idle');

  const set = (field: keyof Fields) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: ACCESS_KEY, ...fields }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFields(INITIAL);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="form-success">
        <div className="form-success-icon">✓</div>
        <h3>Message sent!</h3>
        <p>We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="cf-name">Name</label>
          <input
            id="cf-name" type="text" placeholder="Your name"
            value={fields.name} onChange={set('name')} required
          />
        </div>
        <div className="form-field">
          <label htmlFor="cf-email">Email</label>
          <input
            id="cf-email" type="email" placeholder="you@company.com"
            value={fields.email} onChange={set('email')} required
          />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="cf-company">
          Company <span className="field-optional">(optional)</span>
        </label>
        <input
          id="cf-company" type="text" placeholder="Your company or startup"
          value={fields.company} onChange={set('company')}
        />
      </div>
      <div className="form-field">
        <label htmlFor="cf-message">What do you need?</label>
        <textarea
          id="cf-message" rows={5}
          placeholder="Describe your data challenge - sources, volume, format, timeline..."
          value={fields.message} onChange={set('message')} required
        />
      </div>

      {status === 'error' && (
        <p className="form-error">
          Something went wrong. Please try again or email us at{' '}
          <a href="mailto:alex@datatogo.uk">alex@datatogo.uk</a>.
        </p>
      )}

      <button
        type="submit"
        className="btn-primary btn-submit"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message →'}
      </button>
    </form>
  );
};

export default ContactForm;
