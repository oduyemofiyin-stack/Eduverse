import { getSupabase } from './supabase';
import { logger } from './logger';

function sb() {
  const client = getSupabase();
  if (!client) {
    logger.warn('Supabase', 'Client not available');
    return null;
  }
  return client;
}

export async function getProfile(userId) {
  const client = sb();
  if (!client) return null;
  try {
    const { data, error } = await client
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
    if (error) throw error;
    return data;
  } catch (e) {
    logger.error('Supabase', 'getProfile failed', { userId, error: e.message });
    return null;
  }
}

export async function upsertProfile(userId, fields) {
  const client = sb();
  if (!client) return false;
  try {
    const { error } = await client
      .from('profiles')
      .upsert({ id: userId, ...fields, updated_at: new Date().toISOString() });
    if (error) throw error;
    return true;
  } catch (e) {
    logger.error('Supabase', 'upsertProfile failed', { userId, error: e.message });
    return false;
  }
}

export async function upsertUserData(userId, data) {
  const client = sb();
  if (!client) return false;
  try {
    const { error } = await client
      .from('profiles')
      .update({ data, updated_at: new Date().toISOString() })
      .eq('id', userId);
    if (error) throw error;
    return true;
  } catch (e) {
    logger.error('Supabase', 'upsertUserData failed', { userId, error: e.message });
    return false;
  }
}

export async function getAllProfiles() {
  const client = sb();
  if (!client) return [];
  try {
    const { data, error } = await client
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data || [];
  } catch (e) {
    logger.error('Supabase', 'getAllProfiles failed', { error: e.message });
    return [];
  }
}

export async function deleteProfile(userId) {
  const client = sb();
  if (!client) return false;
  try {
    const { error } = await client
      .from('profiles')
      .delete()
      .eq('id', userId);
    if (error) throw error;
    return true;
  } catch (e) {
    logger.warn('Supabase', 'deleteProfile failed', { userId, error: e.message });
    return false;
  }
}

export async function checkUsername(username) {
  const client = sb();
  if (!client) return false;
  try {
    const { data, error } = await client
      .from('profiles')
      .select('username')
      .eq('username', username)
      .maybeSingle();
    if (error) throw error;
    return !data;
  } catch (e) {
    logger.error('Supabase', 'checkUsername failed', { username, error: e.message });
    return false;
  }
}
