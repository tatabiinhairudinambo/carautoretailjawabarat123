import { useState } from 'react';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';
import { ShieldCheck, ArrowLeft, Send } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function VerificationForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    ktp_number: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('account_verifications')
        .insert([{
          name: formData.name,
          email: formData.email,
          ktp_number: formData.ktp_number,
          status: 'pending'
        }]);

      if (error) throw error;
      
      toast.success('Pengajuan verifikasi berhasil dikirim!');
      setTimeout(() => navigate('/'), 2000);
      
    } catch (error) {
      console.error('Error submitting verification:', error);
      toast.error('Gagal mengirim data. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="bg-gray-950 px-4 py-4 md:px-8">
        <Link to="/" className="flex items-center gap-2 text-white hover:text-red-500 transition-colors">
          <ArrowLeft size={20} />
          <span className="font-medium text-sm">Kembali ke Beranda</span>
        </Link>
      </nav>

      <div className="flex-1 flex items-center justify-center p-4 py-12">
        <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-6 md:p-10 border border-gray-100 relative overflow-hidden">
          
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative">
            <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck size={28} className="text-red-600" />
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 font-display mb-2">Verifikasi Akun</h1>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Silakan lengkapi formulir di bawah ini untuk mengajukan verifikasi akun Anda. Data akan dicek oleh admin kami.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-red-500 focus:border-red-500 block p-3.5 transition-all outline-none focus:bg-white focus:shadow-md focus:shadow-red-500/10"
                  placeholder="Masukkan nama sesuai KTP"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Alamat Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-red-500 focus:border-red-500 block p-3.5 transition-all outline-none focus:bg-white focus:shadow-md focus:shadow-red-500/10"
                  placeholder="contoh@email.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Nomor KTP (NIK)</label>
                <input
                  type="text"
                  required
                  pattern="[0-9]{16}"
                  title="NIK harus 16 digit angka"
                  value={formData.ktp_number}
                  onChange={(e) => setFormData({ ...formData, ktp_number: e.target.value.replace(/\D/g, '').slice(0, 16) })}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-red-500 focus:border-red-500 block p-3.5 transition-all outline-none focus:bg-white focus:shadow-md focus:shadow-red-500/10"
                  placeholder="16 digit angka NIK"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold rounded-xl text-sm px-5 py-4 flex items-center justify-center gap-2 transition-all shadow-lg shadow-red-600/30 hover:shadow-red-600/40 hover:-translate-y-0.5 mt-4"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send size={18} />
                    Kirim Pengajuan
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
