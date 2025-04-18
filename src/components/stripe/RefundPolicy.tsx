import React from 'react';

interface RefundPolicyProps {
  variant?: 'default' | 'compact';
  className?: string;
}

const RefundPolicy: React.FC<RefundPolicyProps> = ({ 
  variant = 'default',
  className = ''
}) => {
  if (variant === 'compact') {
    return (
      <div className={`text-xs text-amber-800 ${className}`}>
        <p>
          <strong>No Refund Policy:</strong> All digital purchases are final and non-refundable.
        </p>
      </div>
    );
  }
  
  return (
    <div className={`rounded-md bg-amber-50 p-3 border border-amber-200 ${className}`}>
      <p className="font-sans text-xs font-medium text-amber-800">
        <strong>No Refund Policy:</strong> Due to the digital nature of our products, all purchases are final and non-refundable. 
        By completing your purchase, you acknowledge that you understand and agree to this policy.
      </p>
    </div>
  );
};

export default RefundPolicy;
