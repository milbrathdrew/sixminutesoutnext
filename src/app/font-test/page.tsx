export default function FontTestPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl mb-6">Font Test - Heading (Chromate)</h1>
      
      <h2 className="text-3xl mb-6">This is a Level 2 Heading</h2>
      
      <h3 className="text-2xl mb-6">This is a Level 3 Heading</h3>
      
      <p className="text-xl mb-6">This is regular paragraph text in Aileron font.</p>
      
      <p className="mb-6">
        This is a longer paragraph with normal text size to test readability of the Aileron font.
        The quick brown fox jumps over the lazy dog. We need to make sure the font renders
        well at different sizes and weights.
      </p>
      
      <div className="grid grid-cols-2 gap-6 mt-12">
        <div>
          <h4 className="text-xl mb-4">Heading Font Examples</h4>
          <p className="font-heading text-3xl mb-2">Chromate Regular 3XL</p>
          <p className="font-heading text-2xl mb-2">Chromate Regular 2XL</p>
          <p className="font-heading text-xl mb-2">Chromate Regular XL</p>
          <p className="font-heading text-lg mb-2">Chromate Regular LG</p>
          <p className="font-heading mb-2">Chromate Regular Base</p>
          <p className="font-heading text-sm">Chromate Regular SM</p>
        </div>
        
        <div>
          <h4 className="text-xl mb-4">Body Font Examples</h4>
          <p className="text-3xl mb-2">Aileron Regular 3XL</p>
          <p className="text-2xl mb-2">Aileron Regular 2XL</p>
          <p className="text-xl mb-2">Aileron Regular XL</p>
          <p className="text-lg mb-2">Aileron Regular LG</p>
          <p className="mb-2">Aileron Regular Base</p>
          <p className="text-sm">Aileron Regular SM</p>
        </div>
      </div>
    </div>
  );
} 