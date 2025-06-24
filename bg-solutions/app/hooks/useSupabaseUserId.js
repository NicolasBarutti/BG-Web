// app/hooks/useSupabaseUserId.js
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabaseClient";

export function useSupabaseUserId() {
  const [userId, setUserId] = useState('');

  useEffect(() => {
    async function fetchUser() {
      const { data } = await supabase.auth.getUser();
      setUserId(data?.user?.id || '');
    }
    fetchUser();
  }, []);

  return userId;
}
