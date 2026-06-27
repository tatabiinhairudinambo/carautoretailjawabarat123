import { useEffect, useState } from 'react';
import { ShieldCheck, User, CreditCard, CheckCheck, X, AlertTriangle } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { VerificationItem } from '../../types';
import toast from 'react-hot-toast';

export default function AccountVerifications() {
  const [verifications, setVerifications] = useState<VerificationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<VerificationItem | null>(null);

  useEffect(() => {
    loadVerifications();
  }, []);

  const loadVerifications = async () => {
    try {
      const { data, error } = await supabase
        .from('account_verifications')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (data) setVerifications(data);
    } catch (error) {
      console.error('Error loading verifications:', error);
      toast.error('Gagal memuat data verifikasi');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (id: string, newStatus: 'approved' | 'rejected') => {
    try {
      const { error } = await supabase
        .from('account_verifications')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) throw error;

      setVerifications((prev) =>
        prev.map((v) => (v.id === id ? { ...v, status: newStatus } : v))
      );
      if (selected?.id === id) {
        setSelected({ ...selected, status: newStatus });
      }
      toast.success(`Status berhasil diubah menjadi ${newStatus}`);
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Gagal mengubah status');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full" />
      </div>
    );
  }

  const pendingCount = verifications.filter((v) => v.status === 'pending').length;

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 font-display">Verifikasi Akun</h2>
        <p className="text-gray-500 text-xs lg:text-sm">
          {verifications.length} data{pendingCount > 0 && `, ${pendingCount} menunggu verifikasi`}
        </p>
      </div>

      {verifications.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center shadow-sm">
          <ShieldCheck size={32} className="text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500 font-medium">Belum ada data verifikasi</p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6">
          {/* List */}
          <div className="space-y-2 lg:space-y-3">
            {verifications.map((v) => (
              <button
                key={v.id}
                onClick={() => setSelected(v)}
                className={`w-full text-left bg-white rounded-2xl border p-3 lg:p-4 shadow-sm hover:shadow-md transition-all ${
                  selected?.id === v.id ? 'border-red-200 ring-2 ring-red-100' : 'border-gray-100'
                } ${v.status === 'pending' ? 'border-l-4 border-l-yellow-500' : ''} ${v.status === 'approved' ? 'border-l-4 border-l-green-500' : ''} ${v.status === 'rejected' ? 'border-l-4 border-l-red-500' : ''}`}
              >
                <div className="flex items-center justify-between mb-0.5 lg:mb-1">
                  <h3 className="text-xs lg:text-sm font-bold text-gray-900">
                    {v.name}
                  </h3>
                  <span className="text-[9px] lg:text-[10px] text-gray-400 flex-shrink-0 ml-2">
                    {new Date(v.created_at).toLocaleDateString('id-ID')}
                  </span>
                </div>
                <p className="text-[11px] lg:text-xs text-gray-500">{v.email}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    v.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                    v.status === 'approved' ? 'bg-green-100 text-green-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {v.status.toUpperCase()}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Detail */}
          <div className="bg-white rounded-2xl border border-gray-100 p-4 lg:p-6 shadow-sm">
            {selected ? (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-gray-900">Detail Verifikasi</h3>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    selected.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                    selected.status === 'approved' ? 'bg-green-100 text-green-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {selected.status.toUpperCase()}
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                      <User size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Nama Lengkap</p>
                      <p className="font-semibold text-gray-900 text-sm">{selected.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">
                      <AlertTriangle size={16} className="text-gray-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Email</p>
                      <p className="font-semibold text-gray-900 text-sm">{selected.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
                      <CreditCard size={16} className="text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Nomor KTP (NIK)</p>
                      <p className="font-semibold text-gray-900 text-sm">{selected.ktp_number}</p>
                    </div>
                  </div>
                  
                  {selected.status === 'pending' && (
                    <div className="flex gap-3 pt-6 border-t border-gray-100 mt-6">
                      <button
                        onClick={() => handleUpdateStatus(selected.id, 'rejected')}
                        className="flex-1 flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 py-3 rounded-xl text-sm font-bold transition-all"
                      >
                        <X size={16} /> Tolak
                      </button>
                      <button
                        onClick={() => handleUpdateStatus(selected.id, 'approved')}
                        className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl text-sm font-bold transition-all"
                      >
                        <CheckCheck size={16} /> Setujui
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-400">
                <ShieldCheck size={48} className="mx-auto mb-4 opacity-50" />
                <p className="text-sm">Pilih data untuk melihat detail</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
