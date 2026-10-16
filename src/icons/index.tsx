import type { LucideProps } from 'lucide-react'
import {
  Accessibility,
  AlertCircle,
  AlertTriangle,
  AppWindow,
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Code,
  Eye,
  Folder,
  Info,
  LayoutDashboard,
  List,
  Loader,
  Loader2,
  Lock,
  Menu,
  MessageSquare,
  Minus,
  Moon,
  MousePointerClick,
  Plus,
  Rows3,
  Search,
  Settings,
  SlidersHorizontal,
  SquareDashed,
  SquarePen,
  Star,
  Sun,
  Table,
  Tag,
  TextCursorInput,
  Trash2,
  Type,
  User,
  X,
} from 'lucide-react'

export interface IconProps extends LucideProps {
  className?: string
}

export function ArrowLeftIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <ArrowLeft className={className} {...props} />
}

export function ArrowRightIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <ArrowRight className={className} {...props} />
}

export function PlusIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <Plus className={className} {...props} />
}

export function XIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <X className={className} {...props} />
}

export function ChevronDownIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <ChevronDown className={className} {...props} />
}

export function ChevronUpIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <ChevronUp className={className} {...props} />
}

export function SearchIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <Search className={className} {...props} />
}

export function EyeIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <Eye className={className} {...props} />
}

export function CodeIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <Code className={className} {...props} />
}

export function ListIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <List className={className} {...props} />
}

export function LockIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <Lock className={className} {...props} />
}

export function EditIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <SquarePen className={className} {...props} />
}

export function TrashIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <Trash2 className={className} {...props} />
}

export function CheckIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <Check className={className} {...props} />
}

export function CheckCircleIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <CheckCircle2 className={className} {...props} />
}

export function WarningIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <AlertTriangle className={className} {...props} />
}

export function AlertCircleIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <AlertCircle className={className} {...props} />
}

export function InfoIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <Info className={className} {...props} />
}

export function StarIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <Star className={className} {...props} />
}

export function SettingsIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <Settings className={className} {...props} />
}

export function AccessibilityIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <Accessibility className={className} {...props} />
}

export function BoardIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <LayoutDashboard className={className} {...props} />
}

export function TagIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <Tag className={className} {...props} />
}

export function TypeIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <Type className={className} {...props} />
}

export function UserIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <User className={className} {...props} />
}

export function FormInputIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <TextCursorInput className={className} {...props} />
}

export function MinusIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <Minus className={className} {...props} />
}

export function LoaderIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <Loader className={className} {...props} />
}

export function SpinnerIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <Loader2 className={className} {...props} />
}

export function DialogIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <AppWindow className={className} {...props} />
}

export function MessageIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <MessageSquare className={className} {...props} />
}

export function ProgressIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <SlidersHorizontal className={className} {...props} />
}

export function TableIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <Table className={className} {...props} />
}

export function AccordionIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <Rows3 className={className} {...props} />
}

export function TabsIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <Folder className={className} {...props} />
}

export function ButtonClickIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <MousePointerClick className={className} {...props} />
}

export function SunIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <Sun className={className} {...props} />
}

export function MoonIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <Moon className={className} {...props} />
}

export function MenuIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <Menu className={className} {...props} />
}

export function SkeletonIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return <SquareDashed className={className} {...props} />
}
