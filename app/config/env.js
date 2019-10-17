import dotenv from 'dotenv'

// Load .env
dotenv.config()

export const NODE_ENV = 'development'
export const PORT = '3400'
export const DATABASE = 'qx_qlp'
export const USERNAME = 'qlp_users'
export const PASSWORD = 'KuttA_2021_DhakA'
export const HOST = 'localhost'
export const DIALECT = 'mysql'
export const SECRET = 'grokonez-super-secret-key'
export const ROLES = ['INVESTOR', 'ADMIN']
export const POOL = {
  limit: 100,
  acquire: 30000,
  idle: 10000
};