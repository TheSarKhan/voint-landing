# Next.js standalone build — üç mərhələli, son image-də yalnız runtime qalır.

FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# DİQQƏT: NEXT_PUBLIC_* dəyişənləri build zamanı koda yazılır, runtime-da yox.
# Ona görə docker build --build-arg ilə ötürülməlidir; sonradan container-in
# env-ini dəyişmək heç nəyi dəyişmir.
ARG NEXT_PUBLIC_SITE_URL=https://landing-voint.sarkhan.az
ARG NEXT_PUBLIC_API_BASE_URL=https://voint.sarkhan.az
ARG NEXT_PUBLIC_PANEL_URL=https://voint.sarkhan.az
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL \
    NEXT_PUBLIC_API_BASE_URL=$NEXT_PUBLIC_API_BASE_URL \
    NEXT_PUBLIC_PANEL_URL=$NEXT_PUBLIC_PANEL_URL \
    NEXT_TELEMETRY_DISABLED=1

RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]
